import { ChapterRepository } from '@modules/courses/infra/prisma/repositories/chapter-repository'
import {
	updateChapterProps,
	updateChapterSchema,
} from '@modules/courses/validations/chapter/update-chapter-validation'
import { AppError } from '@shared/errors/AppError'

interface IRequest {
	data: updateChapterProps
	id: string
}

export class UpdateChapterUseCase {
	constructor(private chapterRepository: ChapterRepository) {}
	async execute({ data, id }: IRequest) {
		const updateData = updateChapterSchema.parse(data)

		const chapterAlreadyExists = await this.chapterRepository.findById(id)

		if (!chapterAlreadyExists)
			throw new AppError({
				message: 'Chapter not found, please try again with different data',
			})

		await this.chapterRepository.updateChapter(id, updateData)
	}
}
