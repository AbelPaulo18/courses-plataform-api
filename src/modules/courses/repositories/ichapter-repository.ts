import { IChapterDTO } from '../dtos/chapter-dto'
import { Chapter } from '../entities/chapter'

export interface IChapterRepository {
	create(data: IChapterDTO): Promise<void>
	findByName(name: string): Promise<Chapter | null>
	listAll(): Promise<Chapter[] | null>
	findByUnique(number: number, courses_id: string): Promise<Chapter | null>
}
