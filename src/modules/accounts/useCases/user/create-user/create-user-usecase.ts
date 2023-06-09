import { AppError } from '@errors/AppError'
import { HashHelper } from '@modules/accounts/helpers/hash/hash-helper'
import { IUsersRepository } from '@modules/accounts/repositories/iusers-repository'
import {
	createUserProps,
	createUserValidationSchema,
} from '@modules/accounts/validation/user/create-user-validation'

export class CreateUserUseCase {
	constructor(private userRepository: IUsersRepository) {}

	async execute(data: createUserProps): Promise<void> {
		const { name, email, password, confirm_password, phone_number, role } =
			createUserValidationSchema.parse(data)

		const checkIfUserAlreadyExistsByEmail =
			await this.userRepository.findByEmail(email)
		const checkIfUserAlreadyExistsByPhoneNumber =
			await this.userRepository.findByPhoneNumber(phone_number)

		if (
			checkIfUserAlreadyExistsByEmail ||
			checkIfUserAlreadyExistsByPhoneNumber
		) {
			throw new AppError({ message: 'User alreadyExists' })
		}

		const hashedPassword: string = await new HashHelper().execute(password)

		await this.userRepository.create({
			name,
			email,
			password: hashedPassword,
			phone_number,
			role,
		})
	}
}
