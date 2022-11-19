import { Component, OnInit } from '@angular/core';
import { JugadorDataService } from '../jugador-data.service';
import { JugadorFavoritoService } from '../jugador-favorito.service';
import { Jugador } from './Jugador';

@Component({
  selector: 'app-jugadores-list',
  templateUrl: './jugadores-list.component.html',
  styleUrls: ['./jugadores-list.component.scss']
})
export class JugadoresListComponent implements OnInit {
  jugadores : Jugador[] = [];
  
  constructor(
    private favorito: JugadorFavoritoService,
    private jugadoresDataService: JugadorDataService) { 
  }

  ngOnInit(): void {
    this.jugadoresDataService.getAll()
    .subscribe(jugadores => this.jugadores = jugadores);
  }

  addToFavorito(jugador: Jugador): void{
    
    this.favorito.addToFavorito(jugador);
  }

  // upFavorite(jugador: Jugador): void{
  //   jugador.favorito++;
  // }

  // downFavorite(jugador: Jugador): void{
  //   jugador.favorito--;
  // }

}
