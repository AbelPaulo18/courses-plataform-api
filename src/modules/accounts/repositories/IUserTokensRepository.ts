import { ICreateUserTokenDTO } from '../dtos/ICreateUserTokenDTO'
import { UserTokens } from '../entities/UserTokens'

export interface IUserTokensRepository {
	create({
		user_id,
		expires_date,
		refresh_token,
	}: ICreateUserTokenDTO): Promise<UserTokens>
	findByUserIdAndRefreshToken(
		user_id: string,
		refresh_token: string
	): Promise<UserTokens>

	deleteById(user_id: string): Promise<void>
}
