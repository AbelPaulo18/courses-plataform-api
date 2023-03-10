import { Router } from 'express'
import multer from 'multer'
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated'

import { createCategoryController } from '../modules/courses/useCases/category/create-category'
import { listCategoriesControllers } from '../modules/courses/useCases/category/list-categories'

const categoriesRouter = Router()
const upload = multer({
	dest: './temp',
})

categoriesRouter.use(ensureAuthenticated)
categoriesRouter.post('/', (request, response) => {
	return createCategoryController.handle(request, response)
})

categoriesRouter.get('/', (request, response) => {
	return listCategoriesControllers.handle(request, response)
})

/* categoriesRouter.post('/import', upload.single('file'), (request, response) => {
	return importCategoryController.handle(request, response)
}) */

export { categoriesRouter }
