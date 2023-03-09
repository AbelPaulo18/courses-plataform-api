import { v4 as uuidV4 } from 'uuid'

export class User {
	id?: string
	name: string
	email: string
	password: string
	phone_number: string
	role?: 'USER' | 'TEACHER'
	created_at?: Date

	constructor() {
		if (!this.id) {
			this.id = uuidV4()
		}
	}
}
