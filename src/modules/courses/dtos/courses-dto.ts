import { Prisma } from '@prisma/client'

export interface ICoursesDTO {
	name: string
	cover: string
	duration: number
	price: number
	description: string
	category_id: string
}
