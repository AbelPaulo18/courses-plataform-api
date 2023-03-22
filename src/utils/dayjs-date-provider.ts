import dayjs from 'dayjs'

function addDays(days: number): Date {
	return dayjs().add(days, 'days').toDate()
}

function addHours(hour: number): Date {
	return dayjs().add(hour, 'hour').toDate()
}

export { addDays, addHours }
