import { ChapterRepository } from '@modules/courses/infra/prisma/repositories/chapter-repository'
import { ListChaptersVideosUseCase } from './list-chapters-videos-usecase'
import { ListChaptersVideosController } from './list-chapters-videos-controller'

const chapterRepository = new ChapterRepository()
const listChaptersVideosUseCase = new ListChaptersVideosUseCase(
	chapterRepository
)
const listChaptersVideosController = new ListChaptersVideosController(
	listChaptersVideosUseCase
)

export { listChaptersVideosController }
