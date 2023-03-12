import { ChapterRepository } from '../../../repositories/implementations/chapter-repository'
import { CreateChapterController } from './create-chapter-controller'
import { CreateChapterUseCase } from './create-chapter-usecase'

const chapterRepository = new ChapterRepository()
const createChapterUseCase = new CreateChapterUseCase(chapterRepository)
const createChapterController = new CreateChapterController(
	createChapterUseCase
)

export { createChapterController }
