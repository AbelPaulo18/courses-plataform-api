import { Router } from 'express'
import { createCoursesController } from '@modules/courses/useCases/courses/create-courses'
import { listCoursesController } from '@modules/courses/useCases/courses/list-courses'

const coursesRouter = Router()

coursesRouter.post('/', (request, response, next) => {
	createCoursesController.handle(request, response, next)
})

coursesRouter.get('/', (request, response, next) => {
	listCoursesController.handle(request, response, next)
})

export { coursesRouter }
