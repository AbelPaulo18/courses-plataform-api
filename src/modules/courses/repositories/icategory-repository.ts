import { ICategoryDTO } from '../dtos/category-dto'
import { Category } from '../entities/category'
import { Courses } from '../entities/courses'

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
		  })[]
		| null
	>
}
