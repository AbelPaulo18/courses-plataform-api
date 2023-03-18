import { CreateCategoryUseCase } from './create-category-usecase'
import { CreateCategoryController } from './create-category-controller'
import { CategoryRepository } from '@modules/courses/repositories/implementations/category-repository'

const categoryRepository = new CategoryRepository()
const createCategoryUseCase = new CreateCategoryUseCase(categoryRepository)
const createCategoryController = new CreateCategoryController(
	createCategoryUseCase
)

export { createCategoryController }
