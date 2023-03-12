import { AppError } from '../../../../../errors/AppError'
import { ICoursesRepository } from '../../../repositories/icourses-repository'
import {
	createCoursesProps,
	createCoursesSchema,
} from '../../../validations/courses/create-courses-validation'

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
