import { z } from 'zod'

const createVideoSchema = z.object({
	name: z.string().min(3),
	description: z.string().min(3).optional(),
	chapter_id: z.string().min(3),
	number: z.number().min(1),
})

type createVideoProps = z.infer<typeof createVideoSchema>

export { createVideoProps, createVideoSchema }
