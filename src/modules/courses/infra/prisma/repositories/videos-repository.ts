import { IVideosDTO } from '@modules/courses/dtos/videos-dto'
import { IVideosRepository } from '@modules/courses/repositories/ivideos-repository'
import { Videos } from '@prisma/client'
import { prisma } from '@shared/infra/prisma'

export class VideoRepository implements IVideosRepository {
	repository = prisma.videos

	async create({
		name,
		chapter_id,
		number,
		description,
	}: IVideosDTO): Promise<void> {
		await this.repository.create({
			data: {
				name,
				chapter_id,
				number,
				description,
			},
		})
	}
	async findById(id: string): Promise<Videos | null> {
		const video = await this.repository.findFirst({ where: { id } })
		return video
	}
	async findByUnique(
		name: string,
		chapter_id: string,
		number: number
	): Promise<Videos | null> {
		const video = await this.repository.findFirst({
			where: {
				OR: [
					{ number, chapter_id },
					{ number, chapter_id, name },
				],
			},
		})
		return video
	}

	async listAll(): Promise<Videos[]> {
		const allVideos = await this.repository.findMany()
		return allVideos
	}

	updateById(id: string): Promise<void> {
		throw new Error('Method not implemented.')
	}
	deleteById(id: string): Promise<void> {
		throw new Error('Method not implemented.')
	}
}
