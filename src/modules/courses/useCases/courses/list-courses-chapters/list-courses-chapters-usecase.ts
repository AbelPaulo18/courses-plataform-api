import { CoursesRepository } from '@modules/courses/infra/prisma/repositories/courses-repository'

export class ListCoursesChaptersUseCase {
	constructor(private coursesRepository: CoursesRepository) {}

	async execute() {
		const coursesRelations =
			await this.coursesRepository.findCoursesChaptersRelation()
		return coursesRelations
	}
}
