import { hash } from 'bcrypt'
import { AppError } from '../../../../../errors/AppError'

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
		const checkIfUserAlreadyExistsByEmail =
			await this.userRepository.findByEmail(email)
		const checkIfUserAlreadyExistsByPhoneNumber =
			await this.userRepository.findByPhoneNumber(phone_number)

		if (
			checkIfUserAlreadyExistsByEmail ||
			checkIfUserAlreadyExistsByPhoneNumber
		) {
			throw new AppError('User alreadyExists')
		}

		const hashedPassword: string = await new HashHelper().execute(password)

		await this.userRepository.create({
			name,
			email,
			password: hashedPassword,
			phone_number,
		})
	}
}
