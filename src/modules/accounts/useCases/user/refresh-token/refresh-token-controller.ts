import { AppError } from '@shared/errors/AppError'
import { NextFunction, Request, Response } from 'express'
import { RefreshTokenUseCase } from './refresh-token-usecase'

export class RefreshTokenController {
	constructor(private refreshTokenUseCase: RefreshTokenUseCase) {}

	async handle(request: Request, response: Response, next: NextFunction) {
		try {
			const token =
				request.body.token ||
				request.headers['x-access-token'] ||
				request.query.token

			const refresh_token = await this.refreshTokenUseCase.execute(token)

			return response.send({ refresh_token })
		} catch (error) {
			next(new AppError({ message: error.message }))
		}
	}
}
