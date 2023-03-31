import { NextFunction, Request, Response } from 'express'
import { CreateVideoUseCase } from './create-videos-usecase'
import { AppError } from '@shared/errors/AppError'
import { HttpCode } from '@shared/errors/http-codes'

export class CreateVideoController {
	constructor(private createVideoUseCase: CreateVideoUseCase) {}

	async handle(request: Request, response: Response, next: NextFunction) {
		try {
			const { name, chapter_id, description, number } = request.body

			await this.createVideoUseCase.execute({
				name,
				chapter_id,
				description,
				number,
			})

			response.status(HttpCode.CREATED).send()
		} catch (error) {
			next(new AppError({ message: error.message }))
		}
	}
}
