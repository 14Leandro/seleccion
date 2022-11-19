import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Jugador } from './jugadores-list/Jugador';

const URL = 'https://6377e4ca0992902a251361a0.mockapi.io/jugadores';

@Injectable({
  providedIn: 'root'
})
export class JugadorDataService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Jugador[]> {
    return this.http.get<Jugador[]>(URL);
  }
}
