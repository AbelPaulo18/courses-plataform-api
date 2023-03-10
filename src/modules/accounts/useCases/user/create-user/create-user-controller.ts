import { Request, Response } from 'express'
import { HttpCode } from '../../../../../errors/http-codes'
import { CreateUserUseCase } from './create-user-usecase'

export class CreateUserController {
	constructor(private createUserUseCase: CreateUserUseCase) {}

	async handle(request: Request, response: Response) {
		const { name, email, password, phone_number } = request.body

		await this.createUserUseCase.execute({
			email,
			name,
			password,
			phone_number,
		})

		response.status(HttpCode.CREATED).send()
	}
}
