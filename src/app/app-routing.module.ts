import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeleccionAboutComponent } from './seleccion-about/seleccion-about.component';
import { SeleccionJugadoresComponent } from './seleccion-jugadores/seleccion-jugadores.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'jugadores',
    pathMatch:'full'
  },
  {
    path:'jugadores',
    component: SeleccionJugadoresComponent
  },
  {
    path:'about',
    component: SeleccionAboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
