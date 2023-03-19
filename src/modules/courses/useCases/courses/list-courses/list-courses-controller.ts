import { NextFunction, Request, Response } from 'express'
import { HttpCode } from '@errors/http-codes'
import { ListCoursesUseCase } from './list-courses-usecase'

export class ListCoursesController {
	constructor(private listCoursesUseCase: ListCoursesUseCase) {}

	async handle(request: Request, response: Response, next: NextFunction) {
		try {
			const all_courses = await this.listCoursesUseCase.execute()

			return response.status(HttpCode.OK).send(all_courses)
		} catch (error) {
			next(error)
		}
	}
}
