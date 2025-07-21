import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { DataPokemon } from '../components/interface/dataPokemon.interface';

@Injectable({
  providedIn: 'root'
})
export class PokemonServiceService {

  private pokemonUrl = 'https://pokeapi.co/api/v2/'

  constructor(private _http: HttpClient, ) { }

  getPokemons(page : number , limit: number = 20) {
    const offset = (page - 1) * limit;
    return this._http.get<DataPokemon>(`${this.pokemonUrl}/pokemon/?limit=${limit}&offset=${offset}`)
      .pipe(
        catchError((error) => {
          console.error('Error fetching Pokemons:', error);
          return throwError(() => new Error('Failed to fetch Pokemons'));
        })
      );
    }
  getInfoPokemon(name: string): Promise<any> {
  return fetch(`${this.pokemonUrl}pokemon/${name}/`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Error fetching Pokemon type with name ${name}`);
      }
      return response.json();
    })
    .catch(error => {
      console.error(`Error fetching Pokemon type with name ${name}:`, error);
      throw error;
    });
}

   getTypesAllPokemons() {
    return this._http.get<any>(`${this.pokemonUrl}type/`)
      .pipe(
        catchError((error) => {
          console.error('Error fetching Pokemon types:', error);
          return throwError(() => new Error('Failed to fetch Pokemon types'));
        })
      );
    }
  }
