import { UserRepository } from '@modules/accounts/infra/prisma/repositories/UsersRepositories'
import { UsersTokensRepositories } from '@modules/accounts/infra/prisma/repositories/UsersTokenRepositories'
import { EtherealMailProvider } from '@shared/providers/mail-provider/implementations/ethereal-mail-provider'
import { SendForgotPasswordMailController } from './send-forgot-password-mail-controller'
import { SendForgotPasswordMailUseCase } from './send-forgot-password-mail-usecase'

const usersRepository = new UserRepository()
const usersTokensRepository = new UsersTokensRepositories()
const etherealMailProvider = new EtherealMailProvider()

const sendForgotPasswordMailUseCase = new SendForgotPasswordMailUseCase(
	usersRepository,
	usersTokensRepository,
	etherealMailProvider
)

const sendForgotPasswordMailController = new SendForgotPasswordMailController(
	sendForgotPasswordMailUseCase
)

export { sendForgotPasswordMailController }
