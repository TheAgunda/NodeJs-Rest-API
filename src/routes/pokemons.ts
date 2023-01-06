import { Request, Response } from "express";

import pokemons = require('../db.json'); //load our local database file

export class Pokemons {

    public routes(app): void { //received the express instance from app.ts file         
        //to pokemons/ route. this is your endpoint
        app.route('/pokemons')
            .get((req: Request, res: Response) => {   //get(verb) request  
                //send all pokemons with a 200 success status code.
                res.status(200).send(pokemons);
            })
    }
}