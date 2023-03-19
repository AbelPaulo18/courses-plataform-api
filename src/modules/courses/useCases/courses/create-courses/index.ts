import { CoursesRepository } from '@modules/courses/infra/prisma/repositories/courses-repository'
import { CreateCoursesController } from './create-courses-controller'
import { CreateCoursesUseCase } from './create-courses-usecase'

const coursesRepository = new CoursesRepository()
const createCoursesUseCase = new CreateCoursesUseCase(coursesRepository)
const createCoursesController = new CreateCoursesController(
	createCoursesUseCase
)

export { createCoursesController }
