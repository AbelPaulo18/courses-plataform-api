import { Response } from 'express'

import { AppError } from './AppError'
import { HttpCode } from './http-codes'

export class ErrorHandler {
	private isTrustedError(error: Error): boolean {
		if (error instanceof AppError) return error.isOperational

		return false
	}

	private handleTrustedError(error: AppError, response: Response): void {
		response.status(error.statusCode).send({
			message: error.message,
		})
	}

	private handleCriticalError(error: Error, response?: Response): void {
		if (response) {
			response.status(HttpCode.INTERNAL_SERVER_ERROR).send({
				status: 'Critical error 💔',
				message: `Internal Server Error - ${error.message}`,
			})
		}

		process.exit(1)
	}

	public handleError(error: Error | AppError, response?: Response): void {
		if (this.isTrustedError(error) && response)
			this.handleTrustedError(error as AppError, response)
		else this.handleCriticalError(error, response)
	}
}

export const errorHandler = new ErrorHandler()
