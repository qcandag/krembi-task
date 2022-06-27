import Route from '@ioc:Adonis/Core/Route'

// Main view
Route.get('/', "CarsController.index" )

// Gate1 button
Route.get('/gate1', "CarsController.gate1" )

// Gate2 button
Route.get('/gate2', "CarsController.gate2" )

// Car exit
Route.get('/exit/:id', 'CarsController.exit')
