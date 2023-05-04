import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PokeInfo, PokeServiceRes } from './pokemon';

const url = 'https://pokeapi.co/api/v2/pokemon/';

@Injectable({
  providedIn: 'root'
})

export class PokeAPIServiceService {

  constructor(private http: HttpClient) {}

  getPokemons(): Observable<PokeServiceRes> {
    return this.http.get<PokeServiceRes>(url+"?limit="+1281);
  }

  getPokemonInfo(id: String): Observable<PokeInfo> {
    return this.http.get<PokeInfo>(url + id);
  }

}
