import { NextFunction, Request, Response } from 'express'
import { verify } from 'jsonwebtoken'
import { UserRepository } from '../modules/accounts/repositories/implementations/UsersRepositories'

interface IPayload {
	sub: string
}

export async function ensureAuthenticated(
	request: Request,
	response: Response,
	next: NextFunction
) {
	const authHeader = request.headers.authorization

	if (!authHeader) throw new Error('Token missing')

	//split header to get token
	const [, token] = authHeader.split(' ')

	try {
		const { sub: user_id } = verify(
			token,
			'664b47be371ce97aed289b894072bd892990d8bd'
		) as IPayload

		const usersRepository = new UserRepository()

		const user = await usersRepository.findById(user_id)

		if (!user) throw new Error('User does not exist')

		next()
	} catch (error) {
		throw new Error('Invalid token!')
	}
}
