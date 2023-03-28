import { v4 as uuidV4 } from 'uuid'

export class PlayerLinks {
	id?: string
	video_id: string

	constructor() {
		if (!this.id) {
			this.id = uuidV4()
		}
	}
}
