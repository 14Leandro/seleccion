import { Component, OnInit } from '@angular/core';
import { JugadorFavoritoService } from '../jugador-favorito.service';
import { Jugador } from './Jugador';

@Component({
  selector: 'app-jugadores-list',
  templateUrl: './jugadores-list.component.html',
  styleUrls: ['./jugadores-list.component.scss']
})
export class JugadoresListComponent implements OnInit {
  jugadores : Jugador[] = [
    {
      nombre: 'emiliano martinez',
      posicion: 'Arquero',
      numero: 23,
      club: 'Aston Villa',
      imagen:'assets/img/dibu.jpeg',
      convocado: true,
    },
    {
      nombre: 'nicolas otanedi',
      posicion: 'Defensor',
      numero: 19,
      club: 'Benfica',
      imagen:'assets/img/otamendi.png',
      convocado: true,
    },
    {
      nombre: 'leandro paredes',
      posicion: 'Mediocampista',
      numero: 5,
      club: 'Juventus',
      imagen:'assets/img/paredes.webp',
      convocado: true,
    },
    {
      nombre: 'Angel Correa',
      posicion: 'Delantero',
      numero: 21,
      club: 'Atletico Madrid',
      imagen:'assets/img/correa.webp',
      convocado: false,
    }

  ];
  
  constructor(private favorito:JugadorFavoritoService) { 
  }

  ngOnInit(): void {
  }

  // addToFavorite(jugador: Jugador): void{
  //   this.favorito.addToFavorite(jugador);
  // }

  // upFavorite(jugador: Jugador): void{
  //   jugador.favorito++;
  // }

  // downFavorite(jugador: Jugador): void{
  //   jugador.favorito--;
  // }

}
