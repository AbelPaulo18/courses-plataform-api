import { Router } from 'express'
import { authRoutes } from './authenticate.routes'
import { categoriesRouter } from './categories.routes'
import { chapterRouter } from './chapter.routes'
import { coursesRouter } from './courses.routes'
import { usersRouter } from './users.routes'

const router = Router()

router.use('/categories', categoriesRouter)
router.use('/courses', coursesRouter)
router.use('/chapters', chapterRouter)
router.use('/users', usersRouter)
router.use('/auth', authRoutes)

export { router }
