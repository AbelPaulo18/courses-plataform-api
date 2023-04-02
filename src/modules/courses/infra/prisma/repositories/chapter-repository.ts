import { IChapterDTO } from '@modules/courses/dtos/chapter-dto'

import { IChapterRepository } from '@modules/courses/repositories/ichapter-repository'
import { Chapters } from '@prisma/client'
import { prisma } from '@shared/infra/prisma/index'

export class ChapterRepository implements IChapterRepository {
	async listAll(): Promise<Chapters[]> {
		return await this.repository.findMany()
	}
	private repository = prisma.chapters

	async findByUnique(
		number: number,
		courses_id: string
	): Promise<Chapters | null> {
		return await this.repository.findUnique({
			where: {
				chapter_unique: {
					courses_id,
					number,
				},
			},
		})
	}

	async create({
		name,
		duration,
		courses_id,
		number,
		status,
	}: IChapterDTO): Promise<void> {
		await this.repository.create({
			data: {
				name,
				duration,
				courses_id,
				number,
				status,
			},
		})
	}

	async findByName(name: string): Promise<Chapters | null> {
		const chapter = await this.repository.findFirst({
			where: { name },
		})

		return chapter
	}
}
