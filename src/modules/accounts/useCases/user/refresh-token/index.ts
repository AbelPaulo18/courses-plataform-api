import { UsersTokensRepositories } from '@modules/accounts/infra/prisma/repositories/UsersTokenRepositories'
import { RefreshTokenController } from './refresh-token-controller'
import { RefreshTokenUseCase } from './refresh-token-usecase'

const usersTokensRepository = new UsersTokensRepositories()

const refreshTokenUseCase = new RefreshTokenUseCase(usersTokensRepository)

const refreshTokenController = new RefreshTokenController(refreshTokenUseCase)

export { refreshTokenController }
