import { hash } from 'bcrypt'

export class HashHelper {
	async execute(value: string): Promise<string> {
		const hashedValue = await hash(value, 12)

		return hashedValue
	}
}
