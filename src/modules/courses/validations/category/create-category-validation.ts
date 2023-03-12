import { z } from 'zod'

const createCategorySchema = z.object({
	name: z.string().min(3),
	description: z.string().min(3),
})

type createCategoryProps = z.infer<typeof createCategorySchema>

export { createCategoryProps, createCategorySchema }
