import { resetPasswordController } from '@modules/accounts/useCases/user/reset-password'
import { sendForgotPasswordMailController } from '@modules/accounts/useCases/user/send-forgot-password-mail'
import { Router } from 'express'

const passwordRoutes = Router()

passwordRoutes.post('/forgot', (request, response, next) => {
	sendForgotPasswordMailController.handle(request, response, next)
})

passwordRoutes.post('/reset', (request, response, next) => {
	resetPasswordController.handle(request, response, next)
})

export { passwordRoutes }
