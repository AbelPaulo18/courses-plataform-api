import { z } from 'zod'

const updateChapterSchema = z.object({
	name: z.string().min(3).optional(),
	duration: z.number().min(0).optional(),
	number: z.number().min(0).optional(),
	courses_id: z.string().optional(),
})

type updateChapterProps = z.infer<typeof updateChapterSchema>

export { updateChapterProps, updateChapterSchema }
