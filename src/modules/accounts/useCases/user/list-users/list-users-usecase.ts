import { User } from '@modules/accounts/entities/User'
import { UserRepository } from '@modules/accounts/infra/prisma/repositories/users-repositories'

export class ListUsersUseCase {
	constructor(private userRepository: UserRepository) {}

	async execute(): Promise<User[] | null> {
		return await this.userRepository.listAll()
	}
}
