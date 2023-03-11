import { Router } from 'express'
import { authRoutes } from './authenticate.routes'
import { categoriesRouter } from './categories.routes'
import { coursesRouter } from './courses.routes'
import { usersRouter } from './users.routes'

const router = Router()

router.use('/categories', categoriesRouter)
router.use('/course', coursesRouter)
router.use('/users', usersRouter)
router.use('/auth', authRoutes)

export { router }
