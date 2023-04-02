import { NextFunction, Request, Response } from 'express'
import { ListChaptersVideosUseCase } from './list-chapters-videos-usecase'
import { HttpCode } from '@shared/errors/http-codes'
import { AppError } from '@shared/errors/AppError'

export class ListChaptersVideosController {
	constructor(private listChaptersVideosUseCase: ListChaptersVideosUseCase) {}

	async handle(
		request: Request,
		response: Response,
		next: NextFunction
	): Promise<Response | void> {
		try {
			const chapters = await this.listChaptersVideosUseCase.execute()

			return response.status(HttpCode.OK).send({ chapters })
		} catch (error) {
			next(new AppError({ message: error.message }))
		}
	}
}
