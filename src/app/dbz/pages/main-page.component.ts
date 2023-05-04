import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/personaje.interface';
import { DBZService } from '../services/dbz.service';

@Component({
    selector: 'app-main-page',
    templateUrl: './main-page.component.html',
    styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
    personajes: Personaje[];

    constructor(private dbzService: DBZService) { 
        this.personajes = this.dbzService.getPersonajes();
    }

    ngOnInit(): void {
     }

    addPersonaje(personaje: Personaje): void {
        this.dbzService.addPersonaje(personaje);
    }

    deletePersonaje(id: string): void {
        this.dbzService.removePersonaje(id);
    }
}
