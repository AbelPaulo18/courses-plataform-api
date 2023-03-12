import { Chapters } from '@prisma/client'
import { prisma } from '../../../../prisma'
import { IChapterDTO } from '../../dtos/chapter-dto'
import { IChapterRepository } from '../ichapter-repository'

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

	async findByName(name: string): Promise<Chapters | null> {
		const chapter = await this.repository.findUnique({
			where: { name },
		})

		return chapter
	}
}
