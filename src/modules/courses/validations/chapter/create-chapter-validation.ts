import { z } from 'zod'

const createChapterSchema = z.object({
	name: z.string().min(3),
	duration: z.number().min(0),
	number: z.number().min(0),
	courses_id: z.string(),
})

type createChapterProps = z.infer<typeof createChapterSchema>

export { createChapterProps, createChapterSchema }
