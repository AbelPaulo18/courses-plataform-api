import { AppError } from '@errors/AppError'
import { HttpCode } from '@errors/http-codes'
import { NextFunction, Request, Response } from 'express'
import { CreateCategoryUseCase } from './create-category-usecase'

export class CreateCategoryController {
	constructor(private createCategoryUseCase: CreateCategoryUseCase) {}

	async handle(
		request: Request,
		response: Response,
		next: NextFunction
	): Promise<Response | void> {
		try {
			const { name, description } = request.body

			await this.createCategoryUseCase.execute({ name, description })

			return response.status(HttpCode.CREATED).send()
		} catch (error) {
			next(
				new AppError({
					message: error?.message,
					statusCode: HttpCode.BAD_REQUEST,
				})
			)
		}
	}
}
