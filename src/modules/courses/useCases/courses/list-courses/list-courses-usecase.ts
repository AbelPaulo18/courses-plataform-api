import { Courses } from '@prisma/client'
import { CoursesRepository } from '../../../repositories/implementations/courses-repository'

export class ListCoursesUseCase {
	constructor(private coursesRepository: CoursesRepository) {}

	async execute(): Promise<Courses[]> {
		const courses = await this.coursesRepository.list()

		return courses
	}
}
