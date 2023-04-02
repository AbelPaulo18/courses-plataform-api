import { UserRepository } from '@modules/accounts/infra/prisma/repositories/users-repositories'
import { ListUsersController } from './list-users-controller'
import { ListUsersUseCase } from './list-users-usecase'

const userRepository = new UserRepository()
const listUsersUseCase = new ListUsersUseCase(userRepository)
const listUsersController = new ListUsersController(listUsersUseCase)

export { listUsersController }
