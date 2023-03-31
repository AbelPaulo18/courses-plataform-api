import { IVideosDTO } from '../dtos/videos-dto'
import { Videos } from '../entities/videos'

export interface IVideosRepository {
	create(data: IVideosDTO): Promise<void>
	findByName(name: string): Promise<Videos>
	findById(id: string): Promise<Videos>
	listAll(): Promise<Videos[]>
	updateById(id: string): Promise<void>
	deleteById(id: string): Promise<void>
}
