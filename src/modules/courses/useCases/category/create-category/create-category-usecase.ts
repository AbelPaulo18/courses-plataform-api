import { z } from 'zod'

import { ICategoryRepository } from '../../../repositories/icategory-repository'

const createCategorySchema = z.object({
	name: z.string().min(3),
	description: z.string().min(3),
})

type createCategoryProps = z.infer<typeof createCategorySchema>

export class CreateCategoryUseCase {
	constructor(private categoryRepository: ICategoryRepository) {}

	async execute(props: createCategoryProps) {
		const { name, description } = createCategorySchema.parse(props)

		const categoryAlreadyExists = await this.categoryRepository.findByName(name)

		if (categoryAlreadyExists) {
			//throw an error
			throw new Error('Category already exists')
		}

		this.categoryRepository.create({ name, description })
	}
}
