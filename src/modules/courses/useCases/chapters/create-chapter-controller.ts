import { NextFunction, Request, Response } from 'express'
import { HttpCode } from '../../../../errors/http-codes'
import { CreateChapterUseCase } from './create-chapter-usecase'

export class CreateChapterController {
	constructor(private createChapterUseCase: CreateChapterUseCase) {}

	async handle(
		request: Request,
		response: Response,
		next: NextFunction
	): Promise<Response | void> {
		try {
			const { name, duration, courses_id } = request.body

			await this.createChapterUseCase.execute({ name, duration, courses_id })

			return response.status(HttpCode.CREATED).send()
		} catch (error) {
			next(error)
		}
	}
}
