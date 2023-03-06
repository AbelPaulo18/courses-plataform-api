import { ICategoryDTO } from '../dtos/category-dto'
import { Category } from '../entities/Category'

export interface ICategoryRepository {
	create({ name, description }: ICategoryDTO): Promise<void>
	findByName(name: string): Promise<Category | null>
	listAll(): Promise<Category[] | null>
}
