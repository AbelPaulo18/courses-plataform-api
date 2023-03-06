import { prisma } from '../../../../prisma'
import { ICategoryDTO } from '../../dtos/category-dto'
import { Category } from '../../entities/category'
import { ICategoryRepository } from '../icategory-repository'

export class CategoryRepository implements ICategoryRepository {
	/* private static INSTANCE: ICategoryRepository

	public static getInstance(): ICategoryRepository {
		if (!CategoryRepository.INSTANCE)
			CategoryRepository.INSTANCE = new CategoryRepository()

		return CategoryRepository.INSTANCE
	} */
	private repository
	constructor() {
		this.repository = prisma.category
	}

	async create({ name, description }: ICategoryDTO): Promise<void> {
		await this.repository.create({
			data: {
				name,
				description,
			},
		})
	}
	async findByName(name: string): Promise<Category | null> {
		const category: Category | null = await this.repository.findFirst({
			where: { name },
		})

		return category
	}
	async listAll(): Promise<Category[]> {
		const all_categories: Category[] = await this.repository.findMany()

		return all_categories
	}
}
