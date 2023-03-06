import { Router } from 'express'
import { categoriesRouter } from './categories.routes'

const router = Router()

router.use('/categories', categoriesRouter)

export { router }
