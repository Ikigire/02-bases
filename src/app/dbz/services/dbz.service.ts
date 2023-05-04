import { Injectable } from '@angular/core';
import { v4 as idGen } from 'uuid';

import { Personaje } from '../interfaces/personaje.interface';

@Injectable({
    providedIn: 'root'
})
export class DBZService {
    personajes: Personaje[] = [{id: idGen(),name:"Krillin", power:500}, {id: idGen(), name:'Goku', power: 10000}];

    /**
     * Método para agregar un personaje
     * @param personaje Objeto Personaje a agregar a la lista
     */
    addPersonaje(personaje: Personaje): void {
        this.personajes.push({id: idGen(), ...personaje});
    }

    /**
     * Permite eliminar un personaje de la lista
     * @param index Posición del personaje a eliminar
     */
    removePersonaje(id: string): void {
        // for (let i = 0; i < this.personajes.length; i++) {
        //     if ( = this.personajes[i])
            
        // }
        // this.personajes.splice(index, 1);
        this.personajes = this.personajes.filter( personaje => personaje.id != id );
    }

    getPersonajes(): Personaje[] {
        return this.personajes;
    }
}