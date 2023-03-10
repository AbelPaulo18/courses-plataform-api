import { HttpCode } from './http-codes'

export class AppError {
	public readonly message: string
	public readonly statusCode: HttpCode

	constructor(message: string, statusCode = HttpCode.BAD_REQUEST) {
		this.message = message
		this.statusCode = statusCode
	}
}
