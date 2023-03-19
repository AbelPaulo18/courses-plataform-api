import { CoursesRepository } from '@modules/courses/infra/prisma/repositories/courses-repository'
import { ListCoursesController } from './list-courses-controller'
import { ListCoursesUseCase } from './list-courses-usecase'

const coursesRepository = new CoursesRepository()
const listCoursesUseCase = new ListCoursesUseCase(coursesRepository)
const listCoursesController = new ListCoursesController(listCoursesUseCase)

export { listCoursesController }
