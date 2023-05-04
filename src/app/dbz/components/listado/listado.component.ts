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
    deleteEmitter: EventEmitter<string> = new EventEmitter;

    constructor() { }

    ngOnInit(): void { }

    emitIndexToDelete(id: string): void {
        this.deleteEmitter.emit(id);
    }
}
