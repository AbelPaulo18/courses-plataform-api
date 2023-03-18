import { CategoryRepository } from '@modules/courses/repositories/implementations/category-repository'
import { ListCategoriesWithCoursesController } from './list-categories-courses-controller'
import { ListCategoriesWithCoursesUseCase } from './list-categories-courses-usecase'

const categoryRepository = new CategoryRepository()
const listCategoryWithCoursesUseCase = new ListCategoriesWithCoursesUseCase(
	categoryRepository
)
const listCategoriesWithCoursesController =
	new ListCategoriesWithCoursesController(listCategoryWithCoursesUseCase)

export { listCategoriesWithCoursesController }
