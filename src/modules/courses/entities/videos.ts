import { v4 as uuidV4 } from 'uuid'

export class Videos {
	id?: string
	name: string
	description?: string
	chapter_id: string
	created_at: Date
	updated_at: Date

	constructor() {
		if (!this.id) {
			this.id = uuidV4()
		}
	}
}
