import { HttpCode } from '@errors/http-codes'
import { NextFunction, Request, Response } from 'express'
import { ListCategoriesWithCoursesUseCase } from './list-categories-courses-usecase'

export class ListCategoriesWithCoursesController {
	constructor(
		private listCategoryWithCoursesUseCase: ListCategoriesWithCoursesUseCase
	) {}

	async handle(request: Request, response: Response, next: NextFunction) {
		try {
			const categories = await this.listCategoryWithCoursesUseCase.execute()

			return response.status(HttpCode.OK).send(categories)
		} catch (error) {
			next(error)
		}
	}
}
