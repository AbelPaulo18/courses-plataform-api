import { NextFunction, Request, Response } from 'express'
import { verify } from 'jsonwebtoken'
import { AppError } from '@shared/errors/AppError'
import { HttpCode } from '@shared/errors/http-codes'
import { UserRepository } from '@modules/accounts/infra/prisma/repositories/UsersRepositories'
import auth from '@config/auth'
import { UsersTokensRepositories } from '@modules/accounts/infra/prisma/repositories/UsersTokenRepositories'

interface IPayload {
	sub: string
}

export async function ensureAuthenticated(
	request: Request,
	response: Response,
	next: NextFunction
) {
	const authHeader = request.headers.authorization
	const userTokenRepository = new UsersTokensRepositories()

	if (!authHeader)
		throw new AppError({
			message: 'Token missing',
			statusCode: HttpCode.UNAUTHORIZED,
		})

	//split header to get token
	const [, token] = authHeader.split(' ')

	try {
		const { sub: user_id } = verify(
			token,
			auth.secret_refresh_token
		) as IPayload

		const user = await userTokenRepository.findByUserIdAndRefreshToken(
			user_id,
			token
		)

		if (!user)
			throw new AppError({
				message: 'User does not exist',
				statusCode: HttpCode.UNAUTHORIZED,
			})

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
