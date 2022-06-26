import Route from '@ioc:Adonis/Core/Route'

Route.get('/', "CarsController.index" )
Route.get('/kapi1', "CarsController.kapi1" )
Route.get('/kapi2', "CarsController.kapi2" )
Route.get('/cik/:id', 'CarsController.cik')
