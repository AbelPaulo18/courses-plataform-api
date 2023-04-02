import { ChapterRepository } from '@modules/courses/infra/prisma/repositories/chapter-repository'

export class ListChaptersUseCase {
	constructor(private chapterRepository: ChapterRepository) {}

	async execute() {
		const chapters = await this.chapterRepository.listAll()
		return chapters
	}
}
