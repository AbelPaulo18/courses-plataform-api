import { v4 as uuidV4 } from 'uuid'

import { IUsersRepository } from '@modules/accounts/repositories/IUsersRepository'
import { IUserTokensRepository } from '@modules/accounts/repositories/IUserTokensRepository'
import { AppError } from '@shared/errors/AppError'
import { addHours } from '@utils/dayjs-date-provider'
import { IMailProvider } from '@shared/providers/mail-provider/imail-provider'

export class SendForgotPasswordMailUseCase {
	constructor(
		private usersRepository: IUsersRepository,
		private usersTokensRepository: IUserTokensRepository,
		private mailProvider: IMailProvider
	) {}

	async execute(email: string): Promise<void> {
		const user = await this.usersRepository.findByEmail(email)

		if (!user) throw new AppError({ message: 'User does not exists!' })

		const token = uuidV4()

		const expires_date = addHours(4)

		await this.usersTokensRepository.create({
			refresh_token: token,
			user_id: user.id,
			expires_date,
		})

		await this.mailProvider.sendMail(
			email,
			'Password Recover',
			`This is the link to recover your password ${token}`
		)
	}
}
