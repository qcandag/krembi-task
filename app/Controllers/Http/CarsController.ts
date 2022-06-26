// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'

//import Route from '@ioc:Adonis/Core/Route'
export default class CarsController {
    

    async index ({ view }){
        const cars = await Database.from('cars').select('*')
        return view.render('includes/test', {
            cars: cars
            
        })
        
    }

    async kapi1 ({session,  response }){
        
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

            }else if ( i1>4  && i1<9){
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
            }else if (i1 > 8) {
                condition = false;
            }
            
        }

        console.log("GATE 1 is FULL")
        session.put('alert', 'GATE 1 is FULL') 
        console.log(session.store.values.alert)
        return response.redirect('/')
    }
    
    async kapi2 ({ session, response }){

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
                // const empty = `C4-${i}`

                await Database
                    .from('cars')
                    .where('id', i1)
                    .update({ C4: "DOLU" })
                
                condition = false;   
                session.put('alert', 'Car parked successfully')       
                return response.redirect('/')

            }else if ( i1>4  && i1<9){
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
            }else if (i1 > 8) {
                condition = false;
            }
            
        }

        console.log("GATE 2 is FULL")
        session.put('alert', 'GATE 2 is FULL') 
        console.log(session.store.values.alert)
        return response.redirect('/')

    }
    
    async cik ({ session, response, params }){
        const car = (params.id).split('-')
        const id = car[1]
        const column =  await (car[0]).toString()
        await Database
                .from('cars')
                .where('id', id)
                .update(column, "BOŞ")
        session.put('alert', 'The car has successfully exited')  
        response.redirect('/')
    }
}


