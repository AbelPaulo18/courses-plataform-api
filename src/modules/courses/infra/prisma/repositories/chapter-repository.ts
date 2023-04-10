import {
	IChapterDTO,
	IChapterUpdateDTO,
} from '@modules/courses/dtos/chapter-dto'

import { IChapterRepository } from '@modules/courses/repositories/ichapter-repository'
import { Chapters, Prisma, Videos } from '@prisma/client'
import { prisma } from '@shared/infra/prisma/index'

export class ChapterRepository implements IChapterRepository {
	async findChaptersVideosRelation(): Promise<
		(Chapters & { videos: Videos[]; _count: Prisma.ChaptersCountOutputType })[]
	> {
		return await this.repository.findMany({
			include: { videos: true, _count: true },
		})
	}
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

	async findById(id: string): Promise<Chapters | null> {
		return await this.repository.findUnique({ where: { id } })
	}

	async updateChapter(id: string, data: IChapterUpdateDTO): Promise<void> {
		await this.repository.update({
			where: {
				id,
			},
			data,
		})
	}
}
