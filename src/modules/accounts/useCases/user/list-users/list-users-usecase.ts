import { User } from '@prisma/client'
import { UserRepository } from '../../../repositories/implementations/UsersRepositories'

export class ListUsersUseCase {
	constructor(private userRepository: UserRepository) {}

	async execute(): Promise<User[] | null> {
		return await this.userRepository.listAll()
	}
}
