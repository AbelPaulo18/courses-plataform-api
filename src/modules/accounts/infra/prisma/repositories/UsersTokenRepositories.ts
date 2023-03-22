import { ICreateUserTokenDTO } from '@modules/accounts/dtos/ICreateUserTokenDTO'
import { User } from '@modules/accounts/entities/User'
import { UserTokens } from '@modules/accounts/entities/UserTokens'
import { IUserTokensRepository } from '@modules/accounts/repositories/IUserTokensRepository'
import { prisma } from '@shared/infra/prisma'

export class UsersTokensRepositories implements IUserTokensRepository {
	private repository = prisma.users_Tokens

	async create({
		user_id,
		expires_date,
		refresh_token,
	}: ICreateUserTokenDTO): Promise<UserTokens> {
		const userToken = await this.repository.create({
			data: {
				expires_date,
				refresh_token,
				user_id,
			},
		})

		return userToken
	}

	async findByUserIdAndRefreshToken(
		user_id: string,
		refresh_token: string
	): Promise<UserTokens> {
		const usersTokens = await this.repository.findFirst({
			where: { user_id, refresh_token },
		})

		return usersTokens
	}

	async deleteById(user_id: string): Promise<void> {
		await this.repository.delete({ where: { id: user_id } })
	}

	async findByRefreshToken(refresh_token: string): Promise<UserTokens> {
		return await this.repository.findFirst({ where: { refresh_token } })
	}
}
