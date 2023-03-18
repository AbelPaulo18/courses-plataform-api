import { ICreateUserDTO } from '../../dtos/ICreateUserDTO'
import { User } from '../../entities/User'
import { IUpdateUserRequest, IUsersRepository } from '../IUsersRepository'

export class UserRepositoryInMemory implements IUsersRepository {
	users: User[] = []

	async create({
		email,
		name,
		password,
		phone_number,
		role,
	}: ICreateUserDTO): Promise<void> {
		const user: User = new User()

		Object.assign(user, {
			name,
			email,
			password,
			phone_number,
			role,
		})
	}

	async listAll(): Promise<User[]> {
		return this.users
	}

	updateField(data: IUpdateUserRequest): Promise<void> {
		throw new Error('Method not implemented.')
	}
	async findById(id: string): Promise<User> {
		return this.users.find(user => user.id === id)
	}
	async findByEmail(email: string): Promise<User> {
		return this.users.find(user => user.email === email)
	}
	async findByPhoneNumber(phone: string): Promise<User> {
		return this.users.find(user => user.phone_number === phone)
	}
}
