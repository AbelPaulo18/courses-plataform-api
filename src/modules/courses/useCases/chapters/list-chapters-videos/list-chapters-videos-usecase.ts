import { ChapterRepository } from '@modules/courses/infra/prisma/repositories/chapter-repository'

export class ListChaptersVideosUseCase {
	constructor(private chapterRepository: ChapterRepository) {}

	async execute() {
		return await this.chapterRepository.findChaptersVideosRelation()
	}
}
