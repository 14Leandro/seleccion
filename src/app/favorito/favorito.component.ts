import { Component, OnInit } from '@angular/core';
import { observable, Observable } from 'rxjs';
import { JugadorFavoritoService } from '../jugador-favorito.service';
import { Jugador } from '../jugadores-list/Jugador';

@Component({
  selector: 'app-favorito',
  templateUrl: './favorito.component.html',
  styleUrls: ['./favorito.component.scss']
})

export class FavoritoComponent implements OnInit {

  favoritoList$: Observable<Jugador[]>;
  
  constructor(private favorito: JugadorFavoritoService) { 
    this.favoritoList$ = favorito.favoritoList.asObservable();
    // favorito.favoritoList.subscribe(f => this.favoritoList = f);
  }

  ngOnInit(): void {
  }

}
