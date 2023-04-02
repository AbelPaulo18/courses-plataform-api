import { NextFunction, Request, Response } from 'express'
import { ListChaptersUseCase } from './list-chapters-usecase'
import { AppError } from '@shared/errors/AppError'
import { HttpCode } from '@shared/errors/http-codes'
import { Chapter } from '@modules/courses/entities/chapter'

export class ListChaptersController {
	constructor(private listChapterUseCase: ListChaptersUseCase) {}

	async handle(
		request: Request,
		response: Response,
		next: NextFunction
	): Promise<Response> {
		try {
			const chapters = await this.listChapterUseCase.execute()

			return response.status(HttpCode.OK).send({ chapters })
		} catch (error) {
			next(new AppError({ message: error.message }))
		}
	}
}
