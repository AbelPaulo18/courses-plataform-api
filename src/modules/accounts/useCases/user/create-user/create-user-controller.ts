import { NextFunction, Request, Response } from 'express'
import { HttpCode } from '../../../../../errors/http-codes'
import { CreateUserUseCase } from './create-user-usecase'

export class CreateUserController {
	constructor(private createUserUseCase: CreateUserUseCase) {}

	async handle(request: Request, response: Response, next: NextFunction) {
		const { name, email, password, phone_number, role } = request.body

		try {
			await this.createUserUseCase.execute({
				email,
				name,
				password,
				phone_number,
				role,
			})

			response.status(HttpCode.CREATED).send()
		} catch (error) {
			next(error)
		}
	}
}
