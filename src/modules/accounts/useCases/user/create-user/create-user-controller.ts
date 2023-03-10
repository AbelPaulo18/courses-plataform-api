import { NextFunction, Request, Response } from 'express'
import { AppError } from '../../../../../errors/AppError'
import { HttpCode } from '../../../../../errors/http-codes'
import { CreateUserUseCase } from './create-user-usecase'

export class CreateUserController {
	constructor(private createUserUseCase: CreateUserUseCase) {}

	async handle(request: Request, response: Response, next: NextFunction) {
		const { name, email, password, phone_number } = request.body

		try {
			await this.createUserUseCase.execute({
				email,
				name,
				password,
				phone_number,
			})

			response.status(HttpCode.CREATED).send()
		} catch (error) {
			next(error)
		}
	}
}
