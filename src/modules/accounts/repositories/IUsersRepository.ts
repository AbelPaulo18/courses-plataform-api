import { User } from '@prisma/client'
import { ICreateUserDTO } from '../dtos/ICreateUserDTO'

export interface IUsersRepository {
	create(data: ICreateUserDTO): Promise<void>
	findByEmail(email: string): Promise<User>
	findByPhoneNumber(phone: string): Promise<User>
}
