import { User } from '@prisma/client'
import { ICreateUserDTO } from '../dtos/ICreateUserDTO'

export interface IUpdateUserRequest {
	user_id: string
	data: any
	column: 'name' | 'avatar' | 'email' | 'phone_number'
}

export interface IUsersRepository {
	create(data: ICreateUserDTO): Promise<void>
	updateField(data: IUpdateUserRequest): Promise<void>
	findById(id: string): Promise<User | null>
	findByEmail(email: string): Promise<User | null>
	findByPhoneNumber(phone: string): Promise<User | null>
}
