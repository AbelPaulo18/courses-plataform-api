import { ICoursesDTO } from '@modules/courses/dtos/courses-dto'
import { Courses } from '@modules/courses/entities/courses'
import { prisma } from '@prisma/index'
import { ICoursesRepository } from '../icourses-repository'

export class CoursesRepository implements ICoursesRepository {
	private repository

	constructor() {
		this.repository = prisma.courses
	}

	async create({
		cover,
		description,
		duration,
		name,
		price,
		category_id,
	}: ICoursesDTO): Promise<void> {
		await this.repository.create({
			data: {
				name,
				description,
				duration,
				cover,
				price,
				category_id,
			},
		})
	}

	async findByName(name: string): Promise<Courses | null> {
		const course = await this.repository.findUnique({
			where: { name },
		})

		return course
	}

	async list(): Promise<Courses[]> {
		const all_courses = await this.repository.findMany()

		return all_courses
	}

	update(courses_id: string, data: any): Promise<void> {
		throw new Error('Method not implemented.')
	}
	delete(courses_id: string): Promise<void> {
		throw new Error('Method not implemented.')
	}
}
