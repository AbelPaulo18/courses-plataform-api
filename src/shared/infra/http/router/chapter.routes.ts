import { Router } from 'express'
import { createChapterController } from '@modules/courses/useCases/chapters/create-chapter'
import { listChaptersController } from '@modules/courses/useCases/chapters/list-chapters'

const chapterRouter = Router()

chapterRouter.post('/', (request, response, next) => {
	createChapterController.handle(request, response, next)
})

chapterRouter.get('/all', (request, response, next) => {
	listChaptersController.handle(request, response, next)
})

export { chapterRouter }
