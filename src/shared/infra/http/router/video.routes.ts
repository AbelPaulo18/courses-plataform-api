import { createVideoController } from '@modules/courses/useCases/videos'
import { Router } from 'express'

const videosRouter = Router()

videosRouter.post('/', (request, response, next) => {
	createVideoController.handle(request, response, next)
})

export { videosRouter }
