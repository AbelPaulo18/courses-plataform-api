import { ICreateUserDTO } from '../../../dtos/ICreateUserDTO'
import { IUsersRepository } from '../../../repositories/IUsersRepository'

export class CreateUserUseCase {
	constructor(private userRepository: IUsersRepository) {}

	async execute({
		name,
		balance,
		email,
		password,
		phone_number,
		role,
	}: ICreateUserDTO): Promise<void> {
		await this.userRepository.create({
			name,
			balance,
			email,
			password,
			phone_number,
			role,
		})
	}
}
