import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';

import { JugadoresListComponent } from './jugadores-list/jugadores-list.component';
import { SeleccionAboutComponent } from './seleccion-about/seleccion-about.component';
import { SeleccionJugadoresComponent } from './seleccion-jugadores/seleccion-jugadores.component';
import { FavoritoComponent } from './favorito/favorito.component';
import { SeleccionQatarComponent } from './seleccion-qatar/seleccion-qatar.component';

@NgModule({
  declarations: [
    AppComponent,
    JugadoresListComponent,
    SeleccionAboutComponent,
    SeleccionJugadoresComponent,
    FavoritoComponent,
    SeleccionQatarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
