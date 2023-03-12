import { AppError } from '../../../../../errors/AppError'

import { ICategoryRepository } from '../../../repositories/icategory-repository'
import {
	createCategoryProps,
	createCategorySchema,
} from '../../../validations/category/create-category-validation'

export class CreateCategoryUseCase {
	constructor(private categoryRepository: ICategoryRepository) {}

	async execute(props: createCategoryProps) {
		const { name, description } = createCategorySchema.parse(props)

		const categoryAlreadyExists = await this.categoryRepository.findByName(name)

		if (categoryAlreadyExists) {
			//throw an error
			throw new AppError({ message: 'Category already exists' })
		}

		this.categoryRepository.create({ name, description })
	}
}
