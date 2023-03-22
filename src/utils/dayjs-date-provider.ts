import dayjs from 'dayjs'

function addDays(days: number): Date {
	return dayjs().add(days, 'days').toDate()
}

function addHours(hour: number): Date {
	return dayjs().add(hour, 'hour').toDate()
}

function compareIfBefore(start_date: Date, end_date: Date): boolean {
	return dayjs(start_date).isBefore(end_date)
}

function dateNow() {
	return dayjs(new Date())
}

export { addDays, addHours, compareIfBefore, dateNow }
