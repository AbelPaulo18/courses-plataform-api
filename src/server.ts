import express from 'express'

import { router } from './router'
import swaggerUi from 'swagger-ui-express'

import swaggerFile from '../swagger.json'

const server = express()

server.use(express.json())
server.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))
server.use(router)

server.get('/', (request, response) => {
	response.status(200).send({
		message: 'Hello World ❤️',
	})
})

server.listen(5000, () => console.log('Server Running...'))
