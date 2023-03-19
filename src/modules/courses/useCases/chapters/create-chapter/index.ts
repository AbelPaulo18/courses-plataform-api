import { ChapterRepository } from '@modules/courses/infra/prisma/repositories/chapter-repository'
import { CreateChapterController } from './create-chapter-controller'
import { CreateChapterUseCase } from './create-chapter-usecase'

const chapterRepository = new ChapterRepository()
const createChapterUseCase = new CreateChapterUseCase(chapterRepository)
const createChapterController = new CreateChapterController(
	createChapterUseCase
)

export { createChapterController }
