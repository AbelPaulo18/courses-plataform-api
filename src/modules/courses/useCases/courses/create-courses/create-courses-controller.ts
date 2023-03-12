import { NextFunction, Request, Response } from 'express'
import { HttpCode } from '../../../../../errors/http-codes'
import { CreateCoursesUseCase } from './create-courses-usecase'

export class CreateCoursesController {
	constructor(private createCoursesUseCase: CreateCoursesUseCase) {}

	async handle(
		request: Request,
		response: Response,
		next: NextFunction
	): Promise<Response | void> {
		const { name, description, cover, price, category_id, duration } =
			request.body
		try {
			await this.createCoursesUseCase.execute({
				cover,
				category_id,
				description,
				duration,
				name,
				price,
			})

			return response.status(HttpCode.CREATED).send()
		} catch (error) {
			next(error)
		}
	}
}
