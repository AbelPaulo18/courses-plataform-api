import { CoursesRepository } from '@modules/courses/infra/prisma/repositories/courses-repository'
import { ListCoursesChaptersUseCase } from './list-courses-chapters-usecase'
import { ListCoursesChaptersController } from './list-courses-chapter-controller'

const coursesRepository = new CoursesRepository()
const listCoursesChapterUseCase = new ListCoursesChaptersUseCase(
	coursesRepository
)
const listCoursesChaptersController = new ListCoursesChaptersController(
	listCoursesChapterUseCase
)

export { listCoursesChaptersController }
