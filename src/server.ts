import 'express-async-errors'
import express, { NextFunction, Request, Response } from 'express'

import './errors/processes'

import { router } from './router'
import swaggerUi from 'swagger-ui-express'

import swaggerFile from '../swagger.json'
import { errorHandler } from './errors/error-handler'
import { HttpCode } from './errors/http-codes'\

const server = express()

server.use(express.json())
server.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))
server.use(router)

server.get('/', (request, response) => {
	response.status(HttpCode.OK).send({
		message: 'Hello World ❤️',
	})
})

server.use(
	(err: Error, request: Request, response: Response, next: NextFunction) => {
		errorHandler.handleError(err, response)
	}
)

server.listen(5000, () => console.log('Server Running...'))
