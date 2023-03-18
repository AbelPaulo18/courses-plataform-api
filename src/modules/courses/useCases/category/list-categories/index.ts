import { ListCategoriesUseCase } from './list-categories-usecase'
import { ListCategoriesController } from './list-categories-controller'
import { CategoryRepository } from '@modules/courses/repositories/implementations/category-repository'

const categoryRepository = new CategoryRepository()
const listCategoriesUseCase = new ListCategoriesUseCase(categoryRepository)
const listCategoriesControllers = new ListCategoriesController(
	listCategoriesUseCase
)

export { listCategoriesControllers }
