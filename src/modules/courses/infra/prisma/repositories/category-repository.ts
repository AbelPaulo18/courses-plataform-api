import { ICategoryDTO } from '@modules/courses/dtos/category-dto'

import { prisma } from '@shared/infra/prisma/index'
import { ICategoryRepository } from '../../../repositories/icategory-repository'
import { Category, Courses, Prisma } from '@prisma/client'

export class CategoryRepository implements ICategoryRepository {
	private repository
	constructor() {
		this.repository = prisma.category
	}
	async listSpecificCategoryCourses(category_id: string): Promise<
		| (Category & {
				courses: Courses[]
		  })
		| null
	> {
		const categoryWithCourses = await this.repository.findUnique({
			where: { id: category_id },
			include: {
				courses: true,
			},
		})

		return categoryWithCourses
	}

	async listCategoriesWithCourses(): Promise<
		| (Category & {
				courses: Courses[]
				_count: Prisma.CategoryCountOutputType
		  })[]
		| null
	> {
		const categories = await this.repository.findMany({
			include: { courses: true, _count: true },
		})

		return categories
	}

	async create({ name, description }: ICategoryDTO): Promise<void> {
		await this.repository.create({
			data: {
				name,
				description,
			},
		})
	}
	async findByName(name: string): Promise<Category | null> {
		const category: Category | null = await this.repository.findFirst({
			where: { name },
		})

		return category
	}
	async listAll(): Promise<Category[]> {
		const all_categories: Category[] = await this.repository.findMany()

		return all_categories
	}
}
