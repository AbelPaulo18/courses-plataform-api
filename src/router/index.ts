import { Router } from 'express'
import { categoriesRouter } from './categories.routes'
import { usersRouter } from './users.routes'

const router = Router()

router.use('/categories', categoriesRouter)
router.use('/users', usersRouter)

export { router }
