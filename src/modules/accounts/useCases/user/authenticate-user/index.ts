import { UserRepository } from '@modules/accounts/infra/prisma/repositories/UsersRepositories'
import { UsersTokensRepositories } from '@modules/accounts/infra/prisma/repositories/UsersTokenRepositories'
import { AuthenticateUserController } from './authenticate-user-controller'
import { AuthenticateUserUseCase } from './authenticate-user-usecase'

const userRepository = new UserRepository()

const usersTokensRepository = new UsersTokensRepositories()
const authenticateUserUseCase = new AuthenticateUserUseCase(
	userRepository,
	usersTokensRepository
)

const authenticateUserController = new AuthenticateUserController(
	authenticateUserUseCase
)

export { authenticateUserController }
