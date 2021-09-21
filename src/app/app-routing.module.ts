import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InicioComponent} from './paginas/inicio/inicio.component';
import {RegistroComponent} from './paginas/registro/registro.component';


const routes: Routes = [
{path: '',  component: InicioComponent},
{path: 'registro/:id',  component: RegistroComponent},
{path: '**',  pathMatch: 'full', redirectTo: ''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
