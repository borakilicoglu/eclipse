import Category from '#models/category'
import type { HttpContext } from '@adonisjs/core/http'

export default class CategoriesController {
  public async index({ inertia }: HttpContext) {
    const categories = await Category.query().preload('tours')
    console.log(categories)

    return inertia.render('categories', { categories })
  }
}
