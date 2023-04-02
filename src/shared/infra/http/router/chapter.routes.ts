import { Router } from 'express'
import { createChapterController } from '@modules/courses/useCases/chapters/create-chapter'
import { listChaptersController } from '@modules/courses/useCases/chapters/list-chapters'
import { listChaptersVideosController } from '@modules/courses/useCases/chapters/list-chapters-videos'

const chapterRouter = Router()

chapterRouter.post('/', (request, response, next) => {
	createChapterController.handle(request, response, next)
})

chapterRouter.get('/', (request, response, next) => {
	listChaptersController.handle(request, response, next)
})

chapterRouter.get('/rel', (request, response, next) => {
	listChaptersVideosController.handle(request, response, next)
})

export { chapterRouter }
