/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/
import router from '@adonisjs/core/services/router'
import { HttpContext } from '@adonisjs/core/http'
import { middleware } from '#start/kernel'

const SigninController = () => import('#controllers/signin_controller')
const LoginController = () => import('#controllers/login_controller')
const LogoutController = () => import('#controllers/logout_controller')
const UsersController = () => import('#controllers/users_controller')
const AgenciesController = () => import('#controllers/agencies_controller')
const BranchesController = () => import('#controllers/branches_controller')
const ToursController = () => import('#controllers/tours_controller')
const DestinationsController = () => import('#controllers/destinations_controller')
const CategoriesController = () => import('#controllers/categories_controller')

router
  .group(() => {
    router.get('/', (ctx: HttpContext) => {
      return ctx.inertia.render('main', {
        title: 'Testing!',
      })
    })

    router.get('/dashboard/profile', (ctx: HttpContext) => {
      return ctx.inertia.render('profile', {
        title: 'Testing!',
      })
    })

    router.get('/dashboard/website', (ctx: HttpContext) => {
      return ctx.inertia.render('website', {
        title: 'Testing!',
      })
    })

    router.on('/dashboard').redirect('/dashboard/agencies')
    router.get('dashboard/agencies', [AgenciesController, 'index'])
    router.post('dashboard/agencies', [AgenciesController, 'update'])

    router.get('dashboard/users', [UsersController, 'index'])
    router.put('dashboard/users', [UsersController, 'update'])
    router.post('dashboard/users', [UsersController, 'create'])

    router.get('dashboard/branches', [BranchesController, 'index'])
    router.get('dashboard/categories', [CategoriesController, 'index'])
    router.get('dashboard/tours', [ToursController, 'index'])
    router.get('dashboard/destinations', [DestinationsController, 'index'])

    router.get('logout', [LogoutController, 'index'])
  })
  .use(middleware.auth())

router
  .group(() => {
    router.get('signin', [SigninController, 'index'])
    router.post('signin', [SigninController, 'store'])

    router.get('login', [LoginController, 'index'])
    router.post('login', [LoginController, 'store'])
  })
  .use(middleware.guest())
