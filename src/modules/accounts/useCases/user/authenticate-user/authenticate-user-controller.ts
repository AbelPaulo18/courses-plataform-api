import { NextFunction, Request, Response } from 'express'
import { AuthenticateUserUseCase } from './authenticate-user-usecase'

export class AuthenticateUserController {
	constructor(private authenticateUserUseCase: AuthenticateUserUseCase) {}

	async handle(
		request: Request,
		response: Response,
		next: NextFunction
	): Promise<Response | void> {
		const { password, email } = request.body

		try {
			const token = await this.authenticateUserUseCase.execute({
				password,
				email,
			})

			return response.send(token)
		} catch (error) {
			next(error)
		}
	}
}
