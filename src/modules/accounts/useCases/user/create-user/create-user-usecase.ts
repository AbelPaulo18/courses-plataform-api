import { ICreateUserDTO } from '../../../dtos/ICreateUserDTO'
import { IUsersRepository } from '../../../repositories/IUsersRepository'

export class CreateUserUseCase {
	constructor(private userRepository: IUsersRepository) {}

	async execute({
		name,
		email,
		password,
		phone_number,
	}: ICreateUserDTO): Promise<void> {
		await this.userRepository.create({
			name,
			email,
			password,
			phone_number,
		})
	}
}
