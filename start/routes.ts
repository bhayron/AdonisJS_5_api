import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'api is runing' }
})

Route.get('/users', 'UsersController.index')
Route.post('/users', 'UsersController.create')

Route.post('/posts', 'PostsController.create')
Route.get('/posts', 'PostsController.index')
