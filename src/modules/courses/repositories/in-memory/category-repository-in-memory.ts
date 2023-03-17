import { Courses } from '@prisma/client'
import { ICategoryDTO } from '../../dtos/category-dto'
import { Category } from '../../entities/category'
import { ICategoryRepository } from '../icategory-repository'

export class CategoryRepositoryInMemory implements ICategoryRepository {
	categories: Category[] = []

	async create({ name, description }: ICategoryDTO): Promise<void> {
		const category = new Category()

		Object.assign(category, {
			name,
			description,
		})

		this.categories.push(category)
	}
	async findByName(name: string): Promise<Category | null> {
		const category: Category | null = this.categories.find(
			category => category.name === name
		) as Category | null

		return category
	}
	async listAll(): Promise<Category[] | null> {
		const list_categories = this.categories

		return list_categories
	}
	listSpecificCategoryCourses(
		category_id: string
	): Promise<(Category & { courses: Courses[] }) | null> {
		throw new Error('Method not implemented.')
	}
	listCategoriesWithCourses(): Promise<
		(Category & { courses: Courses[] })[] | null
	> {
		throw new Error('Method not implemented.')
	}
}
