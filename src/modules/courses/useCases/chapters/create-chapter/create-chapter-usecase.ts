import { ChapterRepository } from '../../../repositories/implementations/chapter-repository'
import {
	createChapterProps,
	createChapterSchema,
} from '../../../validations/chapter/create-chapter-validation'

export class CreateChapterUseCase {
	constructor(private chapterRepository: ChapterRepository) {}

	async execute(data: createChapterProps) {
		const { name, duration, courses_id } = createChapterSchema.parse(data)

		await this.chapterRepository.create({ name, duration, courses_id })
	}
}
