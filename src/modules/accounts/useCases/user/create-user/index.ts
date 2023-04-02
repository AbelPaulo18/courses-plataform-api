import { UserRepository } from '@modules/accounts/infra/prisma/repositories/users-repositories'
import { CreateUserController } from './create-user-controller'
import { CreateUserUseCase } from './create-user-usecase'

const userRepository = new UserRepository()
const createUserUseCase = new CreateUserUseCase(userRepository)

const createUserController = new CreateUserController(createUserUseCase)

export { createUserController }
