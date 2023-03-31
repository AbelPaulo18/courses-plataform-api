import { VideoRepository } from '@modules/courses/infra/prisma/repositories/videos-repository'
import {
	createVideoProps,
	createVideoSchema,
} from '@modules/courses/validations/videos/create-video-validation'
import { AppError } from '@shared/errors/AppError'

export class CreateVideoUseCase {
	constructor(private videoRepository: VideoRepository) {}

	async execute(data: createVideoProps): Promise<void> {
		const { name, chapter_id, description, number } =
			createVideoSchema.parse(data)

		const videoAlreadyExists = await this.videoRepository.findByUnique(
			name,
			chapter_id,
			number
		)

		if (videoAlreadyExists)
			throw new AppError({ message: 'Video already exists!' })

		await this.videoRepository.create({ name, chapter_id, number, description })
	}
}
