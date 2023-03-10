import { deleteFile } from '../../../../../utils/file'
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

		if (user.avatar) await deleteFile(`./temp/avatar/${user.avatar}`)

		await this.userRepository.updateField({
			user_id,
			data: avatar_file,
			column: 'avatar',
		})
	}
}
