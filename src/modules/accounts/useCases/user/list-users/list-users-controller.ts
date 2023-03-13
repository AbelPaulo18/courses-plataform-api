import { NextFunction, Request, Response } from 'express'
import { HttpCode } from '../../../../../errors/http-codes'
import { ListUsersUseCase } from './list-users-usecase'

export class ListUsersController {
	constructor(private listUsersUseCase: ListUsersUseCase) {}

	async handle(
		request: Request,
		response: Response,
		next: NextFunction
	): Promise<Response | void> {
		try {
			const allUsers = await this.listUsersUseCase.execute()

			return response.status(HttpCode.OK).send(allUsers)
		} catch (error) {
			next(error)
		}
	}
}
