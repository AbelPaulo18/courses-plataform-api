import { Chapters, Prisma, Videos } from '@prisma/client'
import { IChapterDTO } from '../dtos/chapter-dto'

export interface IChapterRepository {
	create(data: IChapterDTO): Promise<void>
	findByName(name: string): Promise<Chapters | null>
	listAll(): Promise<Chapters[] | null>
	findByUnique(number: number, courses_id: string): Promise<Chapters | null>
	findChaptersVideosRelation(): Promise<
		(Chapters & { videos: Videos[]; _count: Prisma.ChaptersCountOutputType })[]
	>
	updateChapter(id: string, data: IChapterDTO): Promise<void>
}
