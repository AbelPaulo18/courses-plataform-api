import { Category } from '@modules/courses/entities/category'
import { CategoryRepository } from '@modules/courses/repositories/implementations/category-repository'
import { prisma } from '@prisma/index'

export class ListCategoriesUseCase {
	constructor(private categoryRepositories: CategoryRepository) {}

	async execute(): Promise<Category[]> {
		const all_categories: Category[] = await prisma.category.findMany()
		return all_categories
	}
}
