import { IChapterDTO } from '@modules/courses/dtos/chapter-dto'
import { Chapter } from '@modules/courses/entities/chapter'
import { IChapterRepository } from '@modules/courses/repositories/ichapter-repository'
import { prisma } from '@shared/infra/prisma/index'

export class ChapterRepository implements IChapterRepository {
	private repository

	constructor() {
		this.repository = prisma.chapters
	}

	async create({ name, duration, courses_id }: IChapterDTO): Promise<void> {
		await this.repository.create({
			data: {
				name,
				duration,
				courses_id,
			},
		})
	}

	async findByName(name: string): Promise<Chapter | null> {
		const chapter = await this.repository.findUnique({
			where: { name },
		})

		return chapter
	}
}
