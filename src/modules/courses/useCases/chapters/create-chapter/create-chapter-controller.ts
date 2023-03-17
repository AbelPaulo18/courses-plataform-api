import { NextFunction, Request, Response } from 'express'
import { AppError } from '../../../../../errors/AppError'
import { HttpCode } from '../../../../../errors/http-codes'
import { CreateChapterUseCase } from './create-chapter-usecase'

export class CreateChapterController {
	constructor(private createChapterUseCase: CreateChapterUseCase) {}

	async handle(
		request: Request,
		response: Response,
		next: NextFunction
	): Promise<Response | void> {
		try {
			const { name, duration, courses_id, number } = request.body

			await this.createChapterUseCase.execute({
				name,
				duration,
				courses_id,
				number,
			})

			return response.status(HttpCode.CREATED).send()
		} catch (error) {
			if (error?.name == 'ZodError') {
				next(
					new AppError({
						message: error?.message,
						statusCode: HttpCode.BAD_REQUEST,
					})
				)
			}
			next(error)
		}
	}
}
