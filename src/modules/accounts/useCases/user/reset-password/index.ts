import { UserRepository } from '@modules/accounts/infra/prisma/repositories/UsersRepositories'
import { UsersTokensRepositories } from '@modules/accounts/infra/prisma/repositories/UsersTokenRepositories'
import { ResetPasswordController } from './reset-password-controller'
import { ResetPasswordUseCase } from './reset-password-usecase'

const userRepository = new UserRepository()
const usersTokensRepository = new UsersTokensRepositories()

const resetPasswordUseCase = new ResetPasswordUseCase(
	usersTokensRepository,
	userRepository
)

const resetPasswordController = new ResetPasswordController(
	resetPasswordUseCase
)

export { resetPasswordController }
