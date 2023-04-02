import { Category, Courses, Prisma } from '@prisma/client'
import { ICategoryDTO } from '../dtos/category-dto'

export interface ICategoryRepository {
	create({ name, description }: ICategoryDTO): Promise<void>
	findByName(name: string): Promise<Category | null>
	listAll(): Promise<Category[] | null>
	listSpecificCategoryCourses(category_id: string): Promise<
		| (Category & {
				courses: Courses[]
		  })
		| null
	>
	listCategoriesWithCourses(): Promise<
		| (Category & {
				courses: Courses[]
				_count: Prisma.CategoryCountOutputType
		  })[]
		| null
	>
}
