import { Router } from 'express'
import { createChapterController } from '../modules/courses/useCases/chapters'

const chapterRouter = Router()

chapterRouter.post('/', (request, response, next) => {
	createChapterController.handle(request, response, next)
})

export { chapterRouter }
