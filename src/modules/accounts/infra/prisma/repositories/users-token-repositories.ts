import { ICreateUserTokenDTO } from '@modules/accounts/dtos/ICreateUserTokenDTO'

import { IUserTokensRepository } from '@modules/accounts/repositories/iuser-tokens-repository'
import { Users_Tokens } from '@prisma/client'
import { prisma } from '@shared/infra/prisma'

export class UsersTokensRepositories implements IUserTokensRepository {
	private repository = prisma.users_Tokens

	async create({
		user_id,
		expires_date,
		refresh_token,
	}: ICreateUserTokenDTO): Promise<void> {
		const userToken = await this.repository.create({
			data: {
				expires_date,
				refresh_token,
				user_id,
			},
		})
	}

	async findByUserIdAndRefreshToken(
		user_id: string,
		refresh_token: string
	): Promise<Users_Tokens | null> {
		const usersTokens = await this.repository.findFirst({
			where: { user_id, refresh_token },
		})

		return usersTokens
	}

	async deleteById(user_id: string): Promise<void> {
		await this.repository.delete({ where: { id: user_id } })
	}

	async findByRefreshToken(
		refresh_token: string
	): Promise<Users_Tokens | null> {
		return await this.repository.findFirst({ where: { refresh_token } })
	}
}
