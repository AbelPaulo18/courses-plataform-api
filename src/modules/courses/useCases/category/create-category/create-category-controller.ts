import { Request, Response } from 'express'
import { CreateCategoryUseCase } from './create-category-usecase'

export class CreateCategoryController {
	constructor(private createCategoryUseCase: CreateCategoryUseCase) {}

	async handle(request: Request, response: Response) {
		const { name, description } = request.body

		await this.createCategoryUseCase.execute({ name, description })

		return response.status(201).send()
	}
}