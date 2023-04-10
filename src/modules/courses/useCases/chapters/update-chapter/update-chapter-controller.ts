import { NextFunction, Request, Response } from 'express'
import { UpdateChapterUseCase } from './update-chapter-usecase'
import { AppError } from '@shared/errors/AppError'
import { HttpCode } from '@shared/errors/http-codes'

export class UpdateChapterController {
	constructor(private updateChapterUseCase: UpdateChapterUseCase) {}

	async handle(
		request: Request,
		response: Response,
		next: NextFunction
	): Promise<Response | void> {
		try {
			const { id } = request.params
			const data = request.body

			const updateChapter = await this.updateChapterUseCase.execute({
				id,
				data,
			})

			return response.status(HttpCode.OK).send()
		} catch (error) {
			next(new AppError({ message: error.message }))
		}
	}
}
