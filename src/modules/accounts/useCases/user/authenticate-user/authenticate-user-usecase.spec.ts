import { AppError } from '@errors/AppError'
import { UserRepositoryInMemory } from '@modules/accounts/repositories/in-memory/user-repository-in-memory'
import { createUserProps } from '@modules/accounts/validation/user/create-user-validation'
import { CreateUserUseCase } from '../create-user/create-user-usecase'
import { AuthenticateUserUseCase } from './authenticate-user-usecase'

let authenticateUserUseCase: AuthenticateUserUseCase
let userRepositoryInMemory: UserRepositoryInMemory
let createUserUseCase: CreateUserUseCase

describe('Authenticate user ', () => {
	beforeEach(() => {
		userRepositoryInMemory = new UserRepositoryInMemory()
		authenticateUserUseCase = new AuthenticateUserUseCase(
			userRepositoryInMemory
		)
		createUserUseCase = new CreateUserUseCase(userRepositoryInMemory)
	})
	it('should be able to authenticate an user ', async () => {
		const user: createUserProps = {
			name: 'Mr. Jones',
			email: 'jones@gmail.com',
			password: 'strong_password',
			confirm_password: 'strong_password',
			phone_number: '930516122',
			role: 'TEACHER',
		}

		await createUserUseCase.execute(user)

		const response = await authenticateUserUseCase.execute({
			email: user.email,
			password: user.password,
		})

		expect(response).toHaveProperty('token')
	})

	it('should not be able to authenticate a non existent user', () => {
		expect(async () => {
			await authenticateUserUseCase.execute({
				email: 'some@gmail.com',
				password: 'yeah ',
			})
		}).rejects.toBeInstanceOf(AppError)
	})

	it('should not be able to authenticate with incorrect password', () => {
		expect(async () => {
			const user: createUserProps = {
				name: 'Mr. Jones',
				email: 'jones@gmail.com',
				password: 'strong_password',
				confirm_password: 'strong_password',
				phone_number: '930516122',
				role: 'USER',
			}

			await createUserUseCase.execute(user)

			await authenticateUserUseCase.execute({
				email: user.email,
				password: 'incorrect password',
			})
		}).rejects.toBeInstanceOf(AppError)
	})
})
