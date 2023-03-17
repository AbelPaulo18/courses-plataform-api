import { NextFunction, Request, Response } from 'express'
import { AppError } from '../../../../../errors/AppError'
import { HttpCode } from '../../../../../errors/http-codes'
import { CreateUserUseCase } from './create-user-usecase'

export class CreateUserController {
	constructor(private createUserUseCase: CreateUserUseCase) {}

	async handle(request: Request, response: Response, next: NextFunction) {
		const { name, email, password, phone_number, role, confirm_password } =
			request.body

		try {
			await this.createUserUseCase.execute({
				email,
				name,
				password,
				phone_number,
				role,
				confirm_password,
			})

			response.status(HttpCode.CREATED).send()
		} catch (error) {
			if (error?.name == 'ZodError') {
				next(
					new AppError({
						message: error?.message,
						statusCode: HttpCode.BAD_REQUEST,
					})
				)
			}
			next(error)
		}
	}
}
