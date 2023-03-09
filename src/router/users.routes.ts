import { Router } from 'express'
import { createUserController } from '../modules/accounts/useCases/user/create-user'

const usersRouter = Router()

usersRouter.post('/register', (request, response) => {
	const createUser = createUserController

	createUser.handle(request, response)
})

export { usersRouter }
