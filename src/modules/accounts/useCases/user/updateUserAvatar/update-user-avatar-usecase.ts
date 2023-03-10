import { User } from '../../../entities/User'
import { IUsersRepository } from '../../../repositories/IUsersRepository'

interface IRequest {
	user_id: string
	avatar_file: string
}

export class UpdateUserAvatarUseCase {
	constructor(private userRepository: IUsersRepository) {}
	async execute({ avatar_file, user_id }: IRequest): Promise<void> {
		const user = (await this.userRepository.findById(user_id)) as User

		await this.userRepository.updateField({
			user_id,
			data: avatar_file,
			column: 'avatar',
		})
	}
}
