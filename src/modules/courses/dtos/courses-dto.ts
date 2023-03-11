import { Prisma } from '@prisma/client'

export interface ICoursesDTO {
	name: string
	cover: string
	duration: string
	price: Prisma.Decimal
	description: string
	category_id: string
}
