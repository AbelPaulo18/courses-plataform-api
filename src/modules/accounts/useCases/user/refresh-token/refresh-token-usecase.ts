import { verify, sign } from 'jsonwebtoken'

import { UsersTokensRepositories } from '@modules/accounts/infra/prisma/repositories/UsersTokenRepositories'
import auth from '@config/auth'
import { AppError } from '@shared/errors/AppError'
import { HttpCode } from '@shared/errors/http-codes'
import dayjs from 'dayjs'

interface IPayload {
	sub: string
	email: string
}

interface ITokenResponse {
	token: string
	refresh_token: string
}
export class RefreshTokenUseCase {
	constructor(private usersTokensRepositories: UsersTokensRepositories) {}

	async execute(token: string): Promise<ITokenResponse> {
		const { sub, email } = verify(token, auth.secret_refresh_token) as IPayload

		const user_id = sub

		const userTokens =
			await this.usersTokensRepositories.findByUserIdAndRefreshToken(
				user_id,
				token
			)

		if (!userTokens)
			throw new AppError({
				message: 'Refresh token does not exists!',
				statusCode: HttpCode.UNAUTHORIZED,
			})

		await this.usersTokensRepositories.deleteById(userTokens.id)

		const expires_date: Date = dayjs()
			.add(auth.expires_in_refresh_token_days, 'days')
			.toDate()

		const newToken = sign({}, auth.user_secret_token, {
			subject: user_id,
			expiresIn: auth.expires_in_token,
		})

		const refresh_token = sign({ email }, auth.secret_refresh_token, {
			subject: sub,
			expiresIn: auth.expires_in_refresh_token,
		})

		await this.usersTokensRepositories.create({
			expires_date,
			refresh_token,
			user_id: sub,
		})

		return {
			token: newToken,
			refresh_token,
		}
	}
}
