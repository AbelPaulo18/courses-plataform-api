import { IChapterDTO } from '@modules/courses/dtos/chapter-dto'
import { Chapter } from '@modules/courses/entities/chapter'
import { IChapterRepository } from '@modules/courses/repositories/ichapter-repository'
import { prisma } from '@shared/infra/prisma/index'

export class ChapterRepository implements IChapterRepository {
	async listAll(): Promise<Chapter[]> {
		return await this.repository.findMany()
	}
	private repository = prisma.chapters

	async findByUnique(number: number, courses_id: string): Promise<Chapter> {
		return await this.repository.findUnique({
			where: {
				chapter_unique: {
					courses_id,
					number,
				},
			},
		})
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
		const chapter = await this.repository.findFirst({
			where: { name },
		})

		return chapter
	}
}
