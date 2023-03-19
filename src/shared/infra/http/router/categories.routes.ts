import { Router } from 'express'
import multer from 'multer'
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated'

import { createCategoryController } from '@modules/courses/useCases/category/create-category'
import { listCategoriesControllers } from '@modules/courses/useCases/category/list-categories'
import { listCategoriesWithCoursesController } from '@modules/courses/useCases/category/list-categories-courses'

const categoriesRouter = Router()
const upload = multer({
	dest: './temp',
})

categoriesRouter.post('/', ensureAuthenticated, (request, response, next) => {
	return createCategoryController.handle(request, response, next)
})

categoriesRouter.get('/', (request, response) => {
	return listCategoriesControllers.handle(request, response)
})

categoriesRouter.get('/rel-courses', (request, response, next) => {
	return listCategoriesWithCoursesController.handle(request, response, next)
})

/* categoriesRouter.post('/import', upload.single('file'), (request, response) => {
	return importCategoryController.handle(request, response)
}) */

export { categoriesRouter }
