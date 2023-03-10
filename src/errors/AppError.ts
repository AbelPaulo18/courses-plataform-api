import { HttpCode } from './http-codes'

interface ErrorArgs {
	message: string
	statusCode?: number
	isOperational?: boolean
}
export class AppError extends Error {
	public readonly message: string
	public readonly isOperational: boolean = true
	public readonly statusCode: HttpCode

	constructor({
		message,
		statusCode = HttpCode.BAD_REQUEST,
		isOperational,
	}: ErrorArgs) {
		super(message)
		this.message = message
		this.statusCode = statusCode

		if (isOperational !== undefined) {
			this.isOperational = isOperational
		}
	}
}
