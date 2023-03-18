import { HttpCode } from '@errors/http-codes'
import { NextFunction, Request, Response } from 'express'

import { UpdateUserAvatarUseCase } from './update-user-avatar-usecase'

export class UpdateUserAvatarController {
	constructor(private updateUserAvatarUseCase: UpdateUserAvatarUseCase) {}

	async handle(
		request: Request,
		response: Response,
		next: NextFunction
	): Promise<Response | void> {
		try {
			const { id } = request.user
			const avatar_file = request.file?.filename
			//receber arquivo

			await this.updateUserAvatarUseCase.execute({
				user_id: id,
				avatar_file,
			})

			return response.status(HttpCode.NO_CONTENT).send()
		} catch (error) {
			next(error)
		}
	}
}
