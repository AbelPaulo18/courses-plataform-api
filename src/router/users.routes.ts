import { Router } from 'express'

import multer from 'multer'

import { createUserController } from '../modules/accounts/useCases/user/create-user'
import { updateUserAvatarController } from '../modules/accounts/useCases/user/updateUserAvatar'
import uploadConfig from '../config/upload'
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated'
import { listUsersController } from '../modules/accounts/useCases/user/list-users'

const usersRouter = Router()

const uploadAvatar: multer.Multer = multer(uploadConfig.upload('./temp/avatar'))

usersRouter.post('/register', (request, response, next) => {
	const createUser = createUserController

	createUser.handle(request, response, next)
})

usersRouter.get('/', (request, response, next) => {
	listUsersController.handle(request, response, next)
})

usersRouter.patch(
	'/avatar',
	ensureAuthenticated,
	uploadAvatar.single('avatar'),
	(request, response, next) => {
		updateUserAvatarController.handle(request, response, next)
	}
)
export { usersRouter }
