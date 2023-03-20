import { authenticateUserController } from '@modules/accounts/useCases/user/authenticate-user'
import { refreshTokenController } from '@modules/accounts/useCases/user/refresh-token'
import { Router } from 'express'

const authRoutes = Router()

authRoutes.post('/sessions', (request, response, next) => {
	authenticateUserController.handle(request, response, next)
})

authRoutes.post('/refresh-token', (request, response, next) => {
	refreshTokenController.handle(request, response, next)
})
export { authRoutes }
