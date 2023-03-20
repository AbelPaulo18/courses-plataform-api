import { v4 as uuidV4 } from 'uuid'

export class UserTokens {
	id?: string
	refresh_token: string
	user_id: string
	expires_date: Date
	created_at?: Date

	constructor() {
		if (!this.id) {
			this.id = uuidV4()
		}
	}
}
