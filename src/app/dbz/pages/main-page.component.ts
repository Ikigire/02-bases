import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/personaje.interface';
import { DBZService } from '../services/dbz.service';

@Component({
    selector: 'app-main-page',
    templateUrl: './main-page.component.html',
    styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
    constructor(public dbzService: DBZService) { }

    ngOnInit(): void { }

    addPersonaje(personaje: Personaje): void {
        this.dbzService.addPersonaje(personaje);
    }

    deletePersonaje(index:number): void {
        this.dbzService.removePersonaje(index)
    }
}
