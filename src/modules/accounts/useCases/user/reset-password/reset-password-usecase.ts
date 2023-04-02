import { hash } from 'bcrypt'

import { IUsersRepository } from '@modules/accounts/repositories/iusers-repository'
import { IUserTokensRepository } from '@modules/accounts/repositories/iuser-tokens-repository'
import { AppError } from '@shared/errors/AppError'
import { compareIfBefore, dateNow } from '@utils/dayjs-date-provider'

interface IRequest {
	token: string
	password: string
}

export class ResetPasswordUseCase {
	constructor(
		private usersTokensRepository: IUserTokensRepository,
		private userRespository: IUsersRepository
	) {}

	async execute({ password, token }: IRequest): Promise<void> {
		const userToken = await this.usersTokensRepository.findByRefreshToken(token)

		if (!userToken) throw new AppError({ message: 'Invalid Token 🤭' })

		let now = new Date()
		if (compareIfBefore(userToken.expires_date, now))
			throw new AppError({ message: 'Token expired!🫤' })

		const user = await this.userRespository.findById(userToken.user_id)

		user.password = await hash(password, 12)

		await this.userRespository.updateField({
			column: 'password',
			data: user.password,
			user_id: user.id,
		})

		await this.usersTokensRepository.deleteById(userToken.id)
	}
}
