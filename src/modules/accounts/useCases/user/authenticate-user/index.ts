import { UserRepository } from '@modules/accounts/infra/prisma/repositories/users-repositories'
import { UsersTokensRepositories } from '@modules/accounts/infra/prisma/repositories/users-token-repositories'
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
