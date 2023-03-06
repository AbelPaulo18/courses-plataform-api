import { CategoryRepository } from '../../../repositories/implementations/category-repository'
import { CreateCategoryUseCase } from './create-category-usecase'
import { CreateCategoryController } from './create-category-controller'

const categoryRepository = new CategoryRepository()
const createCategoryUseCase = new CreateCategoryUseCase(categoryRepository)
const createCategoryController = new CreateCategoryController(
	createCategoryUseCase
)

export { createCategoryController }
