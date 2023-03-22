import { HttpCode } from '@shared/errors/http-codes'
import { NextFunction, Request, Response } from 'express'

import { ResetPasswordUseCase } from './reset-password-usecase'

export class ResetPasswordController {
	constructor(private resetPasswordUseCase: ResetPasswordUseCase) {}
	async handle(request: Request, response: Response, next: NextFunction) {
		const { token } = request.query
		const { password } = request.body

		await this.resetPasswordUseCase.execute({
			password,
			token: String(token),
		})

		return response.status(HttpCode.OK).send()
	}
}
