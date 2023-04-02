import auth from '@config/auth'
import { AppError } from '@errors/AppError'
import { IUsersRepository } from '@modules/accounts/repositories/iusers-repository'
import { IUserTokensRepository } from '@modules/accounts/repositories/IUserTokensRepository'
import { compare } from 'bcrypt'
import dayjs from 'dayjs'
import { sign } from 'jsonwebtoken'

interface IRequest {
	email: string
	password: string
}

interface IResponse {
	user: {
		name: string
		email: string
		phone_number: string
	}
	token: string
	refresh_token: string
}

export class AuthenticateUserUseCase {
	constructor(
		private userRepository: IUsersRepository,
		private usersTokensRepository: IUserTokensRepository
	) {}

	async execute({ email, password }: IRequest): Promise<IResponse> {
		const user = await this.userRepository.findByEmail(email)
		const {
			expires_in_token,
			secret_refresh_token,
			user_secret_token,
			expires_in_refresh_token,
			expires_in_refresh_token_days,
		} = auth

		const expires_date: Date = dayjs()
			.add(expires_in_refresh_token_days, 'days')
			.toDate()

		if (!user) {
			throw new AppError({ message: 'Email or password incorrect!' })
		}

		const passwordMatch = await compare(password, user.password)

		if (!passwordMatch) {
			throw new AppError({ message: 'Email or password incorrect!' })
		}

		const token = sign({}, user_secret_token, {
			subject: user.id,
			expiresIn: expires_in_token,
		})

		const refresh_token = sign({ email }, secret_refresh_token, {
			subject: user.id,
			expiresIn: expires_in_refresh_token,
		})

		await this.usersTokensRepository.create({
			expires_date,
			user_id: user.id,
			refresh_token,
		})

		return {
			user: {
				email: user.email,
				phone_number: user.phone_number,
				name: user.name,
			},
			token,
			refresh_token,
		}
	}
}
