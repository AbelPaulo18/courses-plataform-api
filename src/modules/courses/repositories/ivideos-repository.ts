import { IVideosDTO } from '../dtos/videos-dto'
import { Videos } from '../entities/videos'

export interface IVideosRepository {
	create(data: IVideosDTO): Promise<void>
	findByUnique(
		name: string,
		chapter_id: string,
		number: number
	): Promise<Videos>
	findById(id: string): Promise<Videos>
	listAll(): Promise<Videos[]>
	updateById(id: string): Promise<void>
	deleteById(id: string): Promise<void>
}
