import { createVideoController } from '@modules/courses/useCases/videos/create-videos'
import { Router } from 'express'

const videosRouter = Router()

videosRouter.post('/', (request, response, next) => {
	createVideoController.handle(request, response, next)
})

export { videosRouter }
