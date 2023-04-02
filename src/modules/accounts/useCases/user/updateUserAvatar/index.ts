import { UserRepository } from '@modules/accounts/infra/prisma/repositories/users-repositories'
import { UpdateUserAvatarController } from './update-user-avatar-controller'
import { UpdateUserAvatarUseCase } from './update-user-avatar-usecase'

const userRepository = new UserRepository()
const updateUserAvatarUseCase = new UpdateUserAvatarUseCase(userRepository)
const updateUserAvatarController = new UpdateUserAvatarController(
	updateUserAvatarUseCase
)

export { updateUserAvatarController }
