import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { JugadorFavoritoService } from '../jugador-favorito.service';
import { Jugador } from '../jugadores-list/Jugador';

@Component({
  selector: 'app-favorito',
  templateUrl: './favorito.component.html',
  styleUrls: ['./favorito.component.scss']
})
export class FavoritoComponent implements OnInit {

  listaFavorito$: Observable<Jugador[]>;
  
  constructor(private favorito:JugadorFavoritoService) { 
    this.listaFavorito$ = favorito.favoritoList.asObservable();
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void{

  }

}
