import { AppError } from '../../../../../errors/AppError'
import { CategoryRepositoryInMemory } from '../../../repositories/in-memory/category-repository-in-memory'
import { CreateCategoryUseCase } from './create-category-usecase'

let createCategoryUseCase: CreateCategoryUseCase
let categoryRepositoryInMemory: CategoryRepositoryInMemory

describe('Create category', () => {
	beforeEach(() => {
		categoryRepositoryInMemory = new CategoryRepositoryInMemory()
		createCategoryUseCase = new CreateCategoryUseCase(
			categoryRepositoryInMemory
		)
	})

	it('should able to create a new category', async () => {
		const category = {
			name: 'Some Category',
			description: 'Nova categoria para vc',
		}
		await createCategoryUseCase.execute(category)

		const created_category = await categoryRepositoryInMemory.findByName(
			category.name
		)

		expect(created_category).toHaveProperty('id')
	})

	it('should not able to create a new category with existent name', async () => {
		expect(async () => {
			const category = {
				name: 'Some Category',
				description: 'Nova categoria para vc',
			}
			await createCategoryUseCase.execute(category)

			await createCategoryUseCase.execute(category)
		}).rejects.toBeInstanceOf(AppError)
	})
})
