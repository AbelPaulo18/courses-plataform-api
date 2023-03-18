//import { User } from '@prisma/client'
import { ICreateUserDTO } from '@modules/accounts/dtos/ICreateUserDTO'
import { User } from '@modules/accounts/entities/User'
import { prisma } from '@prisma/index'
import { IUpdateUserRequest, IUsersRepository } from '../IUsersRepository'

export class UserRepository implements IUsersRepository {
	private repository

	constructor() {
		this.repository = prisma.user
	}
	async listAll(): Promise<User[] | null> {
		const users = await this.repository.findMany()

		return users
	}

	async findByEmail(email: string): Promise<User | null> {
		const user = await this.repository.findUnique({ where: { email } })

		return user
	}
	async findByPhoneNumber(phone: string): Promise<User | null> {
		const user = await this.repository.findUnique({
			where: { phone_number: phone },
		})

		return user
	}
	async findById(id: string): Promise<User | null> {
		const user = await this.repository.findUnique({
			where: { id },
		})

		return user
	}

	async create({
		name,
		balance,
		email,
		password,
		phone_number,
		role,
	}: ICreateUserDTO): Promise<void> {
		const user = await this.repository.create({
			data: {
				name,
				balance,
				email,
				phone_number,
				role,
				password,
			},
		})
	}

	async updateField({
		user_id,
		data,
		column,
	}: IUpdateUserRequest): Promise<void> {
		await this.repository.update({
			where: { id: user_id },
			data: { [`${column}`]: data },
		})
	}
}
