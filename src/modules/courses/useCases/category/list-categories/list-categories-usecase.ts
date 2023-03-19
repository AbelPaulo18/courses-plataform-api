import { Category } from '@modules/courses/entities/category'
import { CategoryRepository } from '@modules/courses/infra/prisma/repositories/category-repository'
import { prisma } from '@shared/infra/prisma/index'

export class ListCategoriesUseCase {
	constructor(private categoryRepositories: CategoryRepository) {}

	async execute(): Promise<Category[]> {
		const all_categories: Category[] = await prisma.category.findMany()
		return all_categories
	}
}
