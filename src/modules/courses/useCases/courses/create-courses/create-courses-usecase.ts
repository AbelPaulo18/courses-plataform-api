import { z } from 'zod'
import { AppError } from '../../../../../errors/AppError'
import { ICoursesRepository } from '../../../repositories/icourses-repository'

const createCoursesSchema = z.object({
	name: z.string().min(3),
	description: z.string().min(3),
	duration: z.string().min(3),
	price: z.number().min(0),
	cover: z.string(),
	category_id: z.string(),
})

type createCoursesProps = z.infer<typeof createCoursesSchema>

export class CreateCoursesUseCase {
	constructor(private coursesRepository: ICoursesRepository) {}

	async execute(data: createCoursesProps): Promise<void> {
		const { name, description, cover, price, category_id, duration } =
			createCoursesSchema.parse(data)

		const coursesAlreadyExists = await this.coursesRepository.findByName(name)

		if (coursesAlreadyExists)
			throw new AppError({ message: 'Courses already exists' })

		const courses = await this.coursesRepository.create({
			category_id,
			cover,
			description,
			duration,
			name,
			price,
		})
	}
}
