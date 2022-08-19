import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  pokemons:any = [];

  constructor(private http:HttpClient) { }

  getPokemonesData(){
    for (let index = 20; index <= 40; index++) { 
      this.http.get(`https://pokeapi.co/api/v2/pokemon/${index}`).subscribe(res => {
        this.pokemons.push(res);
      });
    }
    return this.pokemons;
  }

  getPokemonData(id:any){
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
  }

  getEspecie(id:number){
    return this.http.get(`https://pokeapi.co/api/v2/pokemon-species/${id}/`);
  }

  getColorInfo(url:string){
    return this.http.get(url);
  }
}
