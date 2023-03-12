import { z } from 'zod'

const createCoursesSchema = z.object({
	name: z.string().min(3),
	description: z.string().min(3),
	duration: z.number().min(3),
	price: z.number().min(0),
	cover: z.string(),
	category_id: z.string(),
})

type createCoursesProps = z.infer<typeof createCoursesSchema>

export { createCoursesProps, createCoursesSchema }
