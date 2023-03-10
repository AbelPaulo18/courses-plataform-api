import { AppError } from './AppError'

process.on('unhandledRejection', (reason: Error | any) => {
	throw new Error(reason.message)
})

process.on('uncaughtException', (error: Error) => {
	throw new AppError({ message: error.message })
})
