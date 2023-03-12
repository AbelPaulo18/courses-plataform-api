import { CoursesRepository } from '../../../repositories/implementations/courses-repository'
import { ListCoursesController } from './list-courses-controller'
import { ListCoursesUseCase } from './list-courses-usecase'

const coursesRepository = new CoursesRepository()
const listCoursesUseCase = new ListCoursesUseCase(coursesRepository)
const listCoursesController = new ListCoursesController(listCoursesUseCase)

export { listCoursesController }
