import { Router } from 'express'
import { authenticateUserController } from '../modules/accounts/useCases/user/authenticate-user'

const authRoutes = Router()

authRoutes.post('/sessions', (request, response, next) => {
	authenticateUserController.handle(request, response, next)
})
export { authRoutes }
