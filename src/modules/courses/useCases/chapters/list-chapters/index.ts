import { ChapterRepository } from '@modules/courses/infra/prisma/repositories/chapter-repository'
import { ListChaptersUseCase } from './list-chapters-usecase'
import { ListChaptersController } from './list-chapters-controller'

const chapterRepository = new ChapterRepository()
const listChapterUseCase = new ListChaptersUseCase(chapterRepository)
const listChaptersController = new ListChaptersController(listChapterUseCase)

export { listChaptersController }
