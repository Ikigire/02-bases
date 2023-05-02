import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Personaje } from '../../interfaces/personaje.interface';

@Component({
    selector: 'dbz-listado',
    templateUrl: './listado.component.html',
    styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
    @Input() 
    personajes: Personaje[] = [];
    @Output('onDeletePersonaje')
    deleteEmitter: EventEmitter<number> = new EventEmitter;

    constructor() { }

    ngOnInit(): void { }

    emitIndexToDelete(index:number): void {
        this.deleteEmitter.emit(index);
    }
}
