import { ICreateUserDTO } from '@modules/accounts/dtos/ICreateUserDTO'
import { User } from '@modules/accounts/entities/User'
import { IUpdateUserRequest, IUsersRepository } from '../iusers-repository'

import { User as user } from '@prisma/client'
export class UserRepositoryInMemory implements IUsersRepository {
	users: user[] = []

	async create({
		email,
		name,
		password,
		phone_number,
		role,
	}: ICreateUserDTO): Promise<void> {
		const user = new User() as user

		Object.assign(user, {
			name,
			email,
			password,
			phone_number,
			role,
		})

		this.users.push(user)
	}

	async listAll(): Promise<user[]> {
		return this.users
	}

	updateField(data: IUpdateUserRequest): Promise<void> {
		throw new Error('Method not implemented.')
	}
	async findById(id: string): Promise<user | null | undefined> {
		return this.users.find(user => user.id === id)
	}
	async findByEmail(email: string): Promise<user | null | undefined> {
		return this.users.find(user => user.email === email)
	}
	async findByPhoneNumber(phone: string): Promise<user | null | undefined> {
		return this.users.find(user => user.phone_number === phone)
	}
}
