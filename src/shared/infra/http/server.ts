import 'express-async-errors'
import express, { NextFunction, Request, Response } from 'express'

import swaggerUi from 'swagger-ui-express'

import '@shared/errors/processes'

import { router } from '@shared/infra/http/router'

import swaggerFile from '../../../swagger.json'
import { errorHandler } from '@shared/errors/error-handler'
import { HttpCode } from '@shared/errors/http-codes'

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
