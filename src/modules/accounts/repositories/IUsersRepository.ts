import { User } from '@prisma/client'
import { ICreateUserDTO } from '../dtos/ICreateUserDTO'

export interface IUsersRepository {
	create(data: ICreateUserDTO): Promise<void>
	findById(id: string): Promise<User | null>
	findByEmail(email: string): Promise<User | null>
	findByPhoneNumber(phone: string): Promise<User | null>
}
