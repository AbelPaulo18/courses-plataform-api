import { hash } from 'bcrypt'

import { ICreateUserDTO } from '../../../dtos/ICreateUserDTO'
import { HashHelper } from '../../../helpers/hash/hash-helper'
import { IUsersRepository } from '../../../repositories/IUsersRepository'

export class CreateUserUseCase {
	constructor(private userRepository: IUsersRepository) {}

	async execute({
		name,
		email,
		password,
		phone_number,
	}: ICreateUserDTO): Promise<void> {
		const hashedPassword: string = await new HashHelper().execute(password)

		await this.userRepository.create({
			name,
			email,
			password: hashedPassword,
			phone_number,
		})
	}
}
