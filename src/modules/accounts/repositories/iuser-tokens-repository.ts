import { Users_Tokens } from '@prisma/client'
import { ICreateUserTokenDTO } from '../dtos/ICreateUserTokenDTO'

export interface IUserTokensRepository {
	create({
		user_id,
		expires_date,
		refresh_token,
	}: ICreateUserTokenDTO): Promise<void>
	findByUserIdAndRefreshToken(
		user_id: string,
		refresh_token: string
	): Promise<Users_Tokens | null>

	deleteById(user_id: string): Promise<void>

	findByRefreshToken(refresh_token: string): Promise<Users_Tokens | null>
}
