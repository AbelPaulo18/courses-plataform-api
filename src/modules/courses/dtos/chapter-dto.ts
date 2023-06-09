export interface IChapterDTO {
	name: string
	duration: number
	number: number
	courses_id: string
	status?: boolean
}

export interface IChapterUpdateDTO {
	name?: string
	duration?: number
	number?: number
	courses_id?: string
	status?: boolean
}
