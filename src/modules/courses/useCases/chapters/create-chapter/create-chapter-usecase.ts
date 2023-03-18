import { ChapterRepository } from '@modules/courses/repositories/implementations/chapter-repository'
import {
	createChapterProps,
	createChapterSchema,
} from '@modules/courses/validations/chapter/create-chapter-validation'

export class CreateChapterUseCase {
	constructor(private chapterRepository: ChapterRepository) {}

	async execute(data: createChapterProps) {
		const { name, duration, courses_id, number } =
			createChapterSchema.parse(data)

		await this.chapterRepository.create({ name, duration, courses_id, number })
	}
}
