import { VideoRepository } from '@modules/courses/infra/prisma/repositories/videos-repository'
import { CreateVideoUseCase } from './create-videos-usecase'
import { CreateVideoController } from './create-videos-controller'

const videoRepository = new VideoRepository()
const createVideoUseCase = new CreateVideoUseCase(videoRepository)
const createVideoController = new CreateVideoController(createVideoUseCase)

export { createVideoController }
