import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(private pokemon:PokemonService) { }

  pokemonData:any;
  id:any;
  pokemones:any = [];

  ngOnInit(): void {
    this.getPokemones();
  }

  getPokemon(){
    this.pokemon.getPokemonData(this.id.toLowerCase())?.subscribe(pokemonData => {
      console.log(pokemonData);
      this.pokemonData = pokemonData;
    });
  }

  getPokemones(){
   this.pokemones = this.pokemon.getPokemonesData();
   console.log(this.pokemones);
  }
}
