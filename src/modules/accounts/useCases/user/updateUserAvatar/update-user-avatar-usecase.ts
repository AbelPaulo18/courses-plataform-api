import { User } from '@modules/accounts/entities/User'
import { IUsersRepository } from '@modules/accounts/repositories/iusers-repository'
import { deleteFile } from '@utils/file'

interface IRequest {
	user_id: string
	avatar_file: string
}

export class UpdateUserAvatarUseCase {
	constructor(private userRepository: IUsersRepository) {}
	async execute({ avatar_file, user_id }: IRequest): Promise<void> {
		const user = (await this.userRepository.findById(user_id)) as User

		if (user.avatar) await deleteFile(`./temp/avatar/${user.avatar}`)

		await this.userRepository.updateField({
			user_id,
			data: avatar_file,
			column: 'avatar',
		})
	}
}
