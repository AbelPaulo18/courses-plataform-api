import { compare } from 'bcrypt'
import { sign } from 'jsonwebtoken'
import { IUsersRepository } from '../../../repositories/IUsersRepository'

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
}

export class AuthenticateUserUseCase {
	constructor(private userRepository: IUsersRepository) {}

	async execute({ email, password }: IRequest): Promise<IResponse> {
		//check if user exists...
		const user = await this.userRepository.findByEmail(email)

		if (!user) {
			throw new Error('Email or password incorrect!')
		}

		//verify if password its correct
		const passwordMatch = await compare(password, user.password)

		if (!passwordMatch) {
			throw new Error('Email or password incorrect!')
		}

		//generate jsonwebtoken
		const token = sign({}, '664b47be371ce97aed289b894072bd892990d8bd', {
			subject: user.id,
			expiresIn: '1d',
		})

		return {
			user,
			token,
		}
	}
}
