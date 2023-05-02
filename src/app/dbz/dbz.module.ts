import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './pages/main-page.component';
import { ListadoComponent } from './components/listado/listado.component';
import { AgregarComponent } from './components/agregar/agregar.component';




@NgModule({
  declarations: [
    MainPageComponent,
    ListadoComponent,
    AgregarComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    MainPageComponent
  ]
})
export class DbzModule { }
