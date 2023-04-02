import { AppError } from '@shared/errors/AppError'
import { NextFunction, Request, Response } from 'express'
import { ListCoursesChaptersUseCase } from './list-courses-chapters-usecase'
import { HttpCode } from '@shared/errors/http-codes'

export class ListCoursesChaptersController {
	constructor(private listCoursesChapterUseCase: ListCoursesChaptersUseCase) {}

	async handle(
		request: Request,
		response: Response,
		next: NextFunction
	): Promise<Response | void> {
		try {
			const courses = await this.listCoursesChapterUseCase.execute()

			return response.status(HttpCode.OK).send({ courses })
		} catch (error) {
			next(new AppError({ message: error.message }))
		}
	}
}
