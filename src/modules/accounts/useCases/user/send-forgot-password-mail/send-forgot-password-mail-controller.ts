import { AppError } from '@shared/errors/AppError'
import { NextFunction, Request, Response } from 'express'
import { SendForgotPasswordMailUseCase } from './send-forgot-password-mail-usecase'

export class SendForgotPasswordMailController {
	constructor(
		private sendForgotPasswordMailUseCase: SendForgotPasswordMailUseCase
	) {}

	async handle(
		request: Request,
		response: Response,
		next: NextFunction
	): Promise<Response | void> {
		try {
			const { email } = request.body
			await this.sendForgotPasswordMailUseCase.execute(email)

			return response.send()
		} catch (error) {
			next(new AppError({ message: error.message }))
		}
	}
}
