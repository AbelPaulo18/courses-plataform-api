import { ChapterRepository } from '@modules/courses/infra/prisma/repositories/chapter-repository'
import {
	createChapterProps,
	createChapterSchema,
} from '@modules/courses/validations/chapter/create-chapter-validation'
import { AppError } from '@shared/errors/AppError'

export class CreateChapterUseCase {
	constructor(private chapterRepository: ChapterRepository) {}

	async execute(data: createChapterProps) {
		const { name, duration, courses_id, number } =
			createChapterSchema.parse(data)

		const chapterAlreadyExists = await this.chapterRepository.findByUnique(
			number,
			courses_id
		)

		if (chapterAlreadyExists)
			throw new AppError({ message: 'Chapter already exists!' })

		await this.chapterRepository.create({ name, duration, courses_id, number })
	}
}
