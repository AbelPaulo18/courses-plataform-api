import { v4 as uuidV4 } from 'uuid'

export class Category {
	id?: string
	name: string
	description: string
	created_at?: Date
	updated_at?: Date

	constructor() {
		this.created_at = new Date()
		this.updated_at = new Date()

		if (!this.id) {
			this.id = uuidV4()
		}
	}
}
