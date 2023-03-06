import { CategoryRepository } from '../../../repositories/implementations/category-repository'
import { ListCategoriesUseCase } from './list-categories-usecase'
import { ListCategoriesController } from './list-categories-controller'

const categoryRepository = new CategoryRepository()
const listCategoriesUseCase = new ListCategoriesUseCase(categoryRepository)
const listCategoriesControllers = new ListCategoriesController(
	listCategoriesUseCase
)

export { listCategoriesControllers }
