import { Request, Response } from 'express'
import { ListCategoriesUseCase } from './list-categories-usecase'

export class ListCategoriesController {
	constructor(private listCategoriesUseCase: ListCategoriesUseCase) {}

	async handle(request: Request, response: Response) {
		const all_categories = await this.listCategoriesUseCase.execute()

		return response.status(200).send(all_categories)
	}
}
