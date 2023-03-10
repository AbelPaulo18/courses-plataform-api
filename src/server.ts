import express, { NextFunction, Request, Response } from 'express'

import { router } from './router'
import swaggerUi from 'swagger-ui-express'

import swaggerFile from '../swagger.json'
import { AppError } from './errors/AppError'

const server = express()

server.use(express.json())
server.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))
server.use(router)

server.get('/', (request, response) => {
	response.status(200).send({
		message: 'Hello World ❤️',
	})
})

server.use(
	(err: Error, request: Request, response: Response, next: NextFunction) => {
		if (err instanceof AppError)
			return response.status(err.statusCode).send({
				message: err.message,
			})

		return response.status(500).send({
			status: 'error',
			message: `Internal Server Error - ${err.message}`,
		})
	}
)

server.listen(5000, () => console.log('Server Running...'))
