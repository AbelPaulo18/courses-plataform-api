export interface ICreateUserDTO {
	name: string
	email: string
	password: string
	phone_number: string
	balance: number
	role: 'USER' | 'TEACHER'
}
