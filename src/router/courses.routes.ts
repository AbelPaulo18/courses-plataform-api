import { Router } from 'express'
import { createCoursesController } from '../modules/courses/useCases/courses/create-courses'

const coursesRouter = Router()

coursesRouter.post('/', (request, response, next) => {
	createCoursesController.handle(request, response, next)
})

export { coursesRouter }
