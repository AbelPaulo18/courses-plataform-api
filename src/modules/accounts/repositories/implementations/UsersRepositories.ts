import { User } from '@prisma/client'
import { prisma } from '../../../../prisma'
import { ICreateUserDTO } from '../../dtos/ICreateUserDTO'
import { IUsersRepository } from '../IUsersRepository'

export class UserRepository implements IUsersRepository {
	private repository

	constructor() {
		this.repository = prisma.user
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
