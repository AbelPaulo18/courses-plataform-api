import { prisma } from '../../../../../prisma'
import { Category } from '../../../entities/category'
import { CategoryRepository } from '../../../repositories/implementations/category-repository'

export class ListCategoriesUseCase {
	constructor(private categoryRepositories: CategoryRepository) {}

	async execute(): Promise<Category[]> {
		const all_categories: Category[] = await prisma.category.findMany()
		return all_categories
	}
}
