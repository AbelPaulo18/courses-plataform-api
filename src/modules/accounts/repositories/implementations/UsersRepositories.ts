import { User } from '@prisma/client'
import { prisma } from '../../../../prisma'
import { ICreateUserDTO } from '../../dtos/ICreateUserDTO'
import { IUsersRepository } from '../IUsersRepository'

export class UserRepository implements IUsersRepository {
	private repository

	constructor() {
		this.repository = prisma.user
	}

	async findByEmail(email: string): Promise<User | null> {
		const find = await this.repository.findUnique({ where: { email } })

		return find
	}
	async findByPhoneNumber(phone: string): Promise<User | null> {
		const find = await this.repository.findUnique({
			where: { phone_number: phone },
		})

		return find
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
}
