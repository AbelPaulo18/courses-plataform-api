import { ICoursesDTO } from '../dtos/courses-dto'
//import { Courses } from '../entities/courses'
import { Courses } from '@prisma/client'

export interface ICoursesRepository {
	create(data: ICoursesDTO): Promise<void>
	findByName(name: string): Promise<Courses | null>
	list(): Promise<Courses[]>
	update(courses_id: string, data: any): Promise<void>
	delete(courses_id: string): Promise<void>
}
