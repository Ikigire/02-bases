import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Personaje } from '../../interfaces/personaje.interface';

@Component({
    selector: 'dbz-agregar',
    templateUrl: './agregar.component.html',
    styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {
    personaje: Personaje;
    @Output("onNewPersonaje") personajeEmitter: EventEmitter<Personaje>;
    
    constructor() {
        this.personaje = {name: '', power: 0};
        this.personajeEmitter = new EventEmitter();
     }

    ngOnInit(): void { }

    emitPersonaje(): void {
        console.log(this.personaje);
        
        if (this.personaje.name.length > 2 && this.personaje.power >= 0){
            this.personajeEmitter.emit({...this.personaje});
            this.personaje = {name: '', power: 0};
        }
    }
}
