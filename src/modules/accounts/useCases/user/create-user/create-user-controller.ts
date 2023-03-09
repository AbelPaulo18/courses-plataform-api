import { Request, Response } from 'express'
import { CreateUserUseCase } from './create-user-usecase'

export class CreateUserController {
	constructor(private createUserUseCase: CreateUserUseCase) {}

	async handle(request: Request, response: Response) {
		const { name, email, password, balance, phone_number, role } = request.body

		await this.createUserUseCase.execute({
			email,
			balance,
			name,
			password,
			phone_number,
			role,
		})

		response.status(201).send()
	}
}
