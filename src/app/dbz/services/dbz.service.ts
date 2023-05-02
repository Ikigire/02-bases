import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/personaje.interface';

@Injectable({
    providedIn: 'root'
})
export class DBZService {
    personajes: Personaje[] = [{name:"Krillin", power:500}, {name:'Goku', power: 10000}];

    /**
     * Método para agregar un personaje
     * @param personaje Objeto Personaje a agregar a la lista
     */
    addPersonaje(personaje: Personaje): void {
        this.personajes.push(personaje);
    }

    /**
     * Permite eliminar un personaje de la lista
     * @param index Posición del personaje a eliminar
     */
    removePersonaje(index: number): void {
        this.personajes.splice(index, 1);
    }
}