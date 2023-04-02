import { NextFunction, Request, Response } from 'express'
import { verify } from 'jsonwebtoken'
import { AppError } from '@shared/errors/AppError'
import { HttpCode } from '@shared/errors/http-codes'
import { UserRepository } from '@modules/accounts/infra/prisma/repositories/users-repositories'
import auth from '@config/auth'
import { UsersTokensRepositories } from '@modules/accounts/infra/prisma/repositories/users-token-repositories'

interface IPayload {
	sub: string
}

export async function ensureAuthenticated(
	request: Request,
	response: Response,
	next: NextFunction
) {
	const authHeader = request.headers.authorization

	if (!authHeader)
		throw new AppError({
			message: 'Token missing',
			statusCode: HttpCode.UNAUTHORIZED,
		})

	//split header to get token
	const [, token] = authHeader.split(' ')

	try {
		const { sub: user_id } = verify(token, auth.user_secret_token) as IPayload

		request.user = {
			id: user_id,
		}
		next()
	} catch (error) {
		throw new AppError({
			message: 'Invalid token!',
			statusCode: HttpCode.UNAUTHORIZED,
		})
	}
}
