import { z } from 'zod'

const createUserValidationSchema = z
	.object({
		name: z.string().min(3),
		email: z.string().email(),
		phone_number: z.string().min(9).max(13),
		password: z.string().min(4),
		role: z.enum(['TEACHER', 'USER']).optional(),
		confirm_password: z.string().min(4),
	})
	.superRefine(({ password, confirm_password }, ctx) => {
		if (password !== confirm_password) {
			ctx.addIssue({
				code: 'custom',
				message: "Password didn't match!",
				path: [password, confirm_password],
			})
		}
	})

type createUserProps = z.infer<typeof createUserValidationSchema>

export { createUserProps, createUserValidationSchema }
