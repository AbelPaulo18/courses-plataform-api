import { type } from 'os'
import { z } from 'zod'
import { ChapterRepository } from '../../../repositories/implementations/chapter-repository'

const createChapterSchema = z.object({
	name: z.string().min(3),
	duration: z.number().min(0),
	courses_id: z.string(),
})

type createChapterProps = z.infer<typeof createChapterSchema>

export class CreateChapterUseCase {
	constructor(private chapterRepository: ChapterRepository) {}

	async execute(data: createChapterProps) {
		const { name, duration, courses_id } = createChapterSchema.parse(data)

		await this.chapterRepository.create({ name, duration, courses_id })
	}
}
