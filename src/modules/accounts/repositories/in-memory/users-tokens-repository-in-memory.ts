import { ICreateUserTokenDTO } from '@modules/accounts/dtos/ICreateUserTokenDTO'
import { Users_Tokens } from '@prisma/client'
import { IUserTokensRepository } from '../iuser-tokens-repository'
import { UserTokens } from '@modules/accounts/entities/UserTokens'

export class UsersTokensRepositoryInMemory implements IUserTokensRepository {
	userTokens: Users_Tokens[] = []
	async create({
		user_id,
		expires_date,
		refresh_token,
	}: ICreateUserTokenDTO): Promise<void> {
		const userToken = new UserTokens() as Users_Tokens

		Object.assign({ user_id, expires_date, refresh_token }, userToken)

		this.userTokens.push(userToken)
	}
	async findByUserIdAndRefreshToken(
		user_id: string,
		refresh_token: string
	): Promise<Users_Tokens | null | undefined> {
		return this.userTokens.find(
			token =>
				token.user_id === user_id && token.refresh_token === refresh_token
		)
	}
	async deleteById(user_id: string): Promise<void> {
		throw new Error('Method not implemented.')
	}
	async findByRefreshToken(
		refresh_token: string
	): Promise<Users_Tokens | null | undefined> {
		return this.userTokens.find(token => token.refresh_token === refresh_token)
	}
}
