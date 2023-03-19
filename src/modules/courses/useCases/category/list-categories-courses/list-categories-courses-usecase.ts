import { CategoryRepository } from '@modules/courses/infra/prisma/repositories/category-repository'

export class ListCategoriesWithCoursesUseCase {
	constructor(private categoryRepository: CategoryRepository) {}

	async execute() {
		const categories = await this.categoryRepository.listCategoriesWithCourses()

		return categories
	}
}
