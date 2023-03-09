import { UserRepository } from '../../../repositories/implementations/UsersRepositories'
import { AuthenticateUserController } from './authenticate-user-controller'
import { AuthenticateUserUseCase } from './authenticate-user-usecase'

const userRepository = new UserRepository()

const authenticateUserUseCase = new AuthenticateUserUseCase(userRepository)

const authenticateUserController = new AuthenticateUserController(
	authenticateUserUseCase
)

export { authenticateUserController }
