// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'

//import Route from '@ioc:Adonis/Core/Route'
export default class CarsController {
    
    // Main view
    async index ({ view }){

        // DB Data
        const cars = await Database.from('cars').select('*')

        return view.render('includes/main', {
            cars: cars
            
        })
        
    }

    // Gate 1
    async gate1 ({session,  response }){
        
        session.clear()

        // DB Search
        const carsC1 = await Database.from('cars').select('C1')
        const carsC2 = await Database.from('cars').select('C2')

        // DB Array
        const array = [carsC1, carsC2]

        // Loop Condition Veriables
        let condition = true;
        let length0 = array[0].length;
        let i1 = 0;

        for( i1 <= length0; condition === true;  i1++){
            
            if (i1 <= 4 && array[0][i1].C1 === "BOŞ" ){
                // const empty = `C1-${i}`

                await Database
                    .from('cars')
                    .where('id', i1)
                    .update({ C1: "DOLU" })
                
                condition = false;   
                session.put('alert', 'Car parked successfully')       
                return response.redirect('/')

            }  // If there is no empty car park go from here:  
            else if ( i1>4  && i1<9){

                let incondition = true;
                for( let i2 = 0 ; incondition === true; i2++){
                    if ( i2 <= 4 && array[1][i2].C2 === 'BOŞ'){

                        await Database
                            .from('cars')
                            .where('id', i2)
                            .update({C2:"DOLU"})

                        condition = false
                        session.put('alert', 'Car parked successfully')  
                        return response.redirect('/')

                    }else if (i2 > 4){
                        incondition = false;
                    }
                }
            }   // And if gate is full break the loop and continue
            else if (i1 > 8) {
                condition = false;
            }
            
        }

        session.put('alert', 'GATE 1 is FULL') 
        return response.redirect('/')
    }
    
    // Gate 2
    async gate2 ({ session, response }){

        session.clear()
        // DB Search
        const carsC3 = await Database.from('cars').select('C3')
        const carsC4 = await Database.from('cars').select('C4')

        // DB Array
        const array = [carsC3, carsC4]

        // Loop Condition Veriables
        let condition = true;
        let length0 = array[1].length;
        let i1 = 0;

        for( i1 <= length0; condition === true;  i1++){
            
            if (i1 <= 4 && array[1][i1].C4 === "BOŞ" ){

                await Database
                    .from('cars')
                    .where('id', i1)
                    .update({ C4: "DOLU" })
                
                condition = false;   
                session.put('alert', 'Car parked successfully')       
                return response.redirect('/')

            }
                // If there is no empty car park go from here: 
            else if ( i1>4  && i1<9){
                let incondition = true;
                for( let i2 = 0 ; incondition === true; i2++){
                    if ( i2 <= 4 && array[0][i2].C3 === 'BOŞ'){
                        await Database
                            .from('cars')
                            .where('id', i2)
                            .update({C3:"DOLU"})

                        condition = false
                        session.put('alert', 'Car parked successfully')  
                        return response.redirect('/')
                    }else if (i2 > 4){
                        incondition = false;
                    }
                }
            } // And if gate is full break the loop and continue
            else if (i1 > 8) {
                condition = false;
            }
            
        }

        session.put('alert', 'GATE 2 is FULL') 

        return response.redirect('/')

    }
    
    // Exit
    async exit ({ session, response, params }){

        // Split the params
        const car = (params.id).split('-')

        // Car location
        const id = car[1]
        const column =  await (car[0]).toString()

        // DB Process
        await Database
                .from('cars')
                .where('id', id)
                .update(column, "BOŞ")

        session.put('alert', 'The car has successfully exited')  
        response.redirect('/')
    }
}


