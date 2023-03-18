import { CategoryRepository } from '@modules/courses/repositories/implementations/category-repository'

export class ListCategoriesWithCoursesUseCase {
	constructor(private categoryRepository: CategoryRepository) {}

	async execute() {
		const categories = await this.categoryRepository.listCategoriesWithCourses()

		return categories
	}
}
