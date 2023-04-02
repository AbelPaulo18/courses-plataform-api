import { Chapters } from '@prisma/client'
import { IChapterDTO } from '../dtos/chapter-dto'

export interface IChapterRepository {
	create(data: IChapterDTO): Promise<void>
	findByName(name: string): Promise<Chapters | null>
	listAll(): Promise<Chapters[] | null>
	findByUnique(number: number, courses_id: string): Promise<Chapters | null>
}
