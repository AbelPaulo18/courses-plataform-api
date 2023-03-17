export class Admin {
	id?: string
	name: string
	email: string
	password: string
	phone_number: string
	role?: 'Super' | 'Normal'
	created_at?: Date
}
