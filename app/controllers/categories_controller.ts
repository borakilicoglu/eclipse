import Category from '#models/category'
import type { HttpContext } from '@adonisjs/core/http'

export default class CategoriesController {
  public async index({ inertia }: HttpContext) {
    const categories = await Category.query().preload('tours')

    return inertia.render('categories', { categories })
  }
}
