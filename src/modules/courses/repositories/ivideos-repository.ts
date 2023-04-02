import { Videos } from '@prisma/client'
import { IVideosDTO } from '../dtos/videos-dto'

export interface IVideosRepository {
	create(data: IVideosDTO): Promise<void>
	findByUnique(
		name: string,
		chapter_id: string,
		number: number
	): Promise<Videos | null>
	findById(id: string): Promise<Videos | null>
	listAll(): Promise<Videos[]>
	updateById(id: string): Promise<void>
	deleteById(id: string): Promise<void>
}
