import { Router } from 'express'
import { authRoutes } from './authenticate.routes'
import { categoriesRouter } from './categories.routes'
import { chapterRouter } from './chapter.routes'
import { coursesRouter } from './courses.routes'
import { passwordRoutes } from './password.routes'
import { usersRouter } from './users.routes'
import { videosRouter } from './video.routes'

const router = Router()

router.use('/categories', categoriesRouter)
router.use('/courses', coursesRouter)
router.use('/chapters', chapterRouter)
router.use('/videos', videosRouter)
router.use('/users', usersRouter)
router.use('/auth', authRoutes)
router.use('/password', passwordRoutes)

export { router }
