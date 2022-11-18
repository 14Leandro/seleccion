import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Jugador } from './jugadores-list/Jugador';

@Injectable({
  providedIn: 'root'
})

export class JugadorFavoritoService {

  private _favoritoList: Jugador[] = [];

  favoritoList: BehaviorSubject<Jugador[]> = new BehaviorSubject(this._favoritoList);

  constructor() { }

  addToFavorito(jugador: Jugador) {
    let item: Jugador | undefined;
    item = this._favoritoList.find(v1 => v1.nombre == jugador.nombre);
    if (!item) {
      this._favoritoList.push({... jugador});
    }
    console.log(this._favoritoList);
    this.favoritoList.next(this._favoritoList);
  }

  // private _favoritoList: Jugador[] = [];

  
  // listaFavorito: any;
  // addToFavorite(jugador: Jugador) {
  //     let item: Jugador |undefined = this._favoritoList.find((v1) => v1.nombre==jugador.nombre);
  //     if (!item) {
  //       this._favoritoList.push({ ... jugador});
  //     }
  //     // this.favoritoList.next(this._favoritoList);
  // }

}