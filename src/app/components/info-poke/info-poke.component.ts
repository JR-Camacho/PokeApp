import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-info-poke',
  templateUrl: './info-poke.component.html',
  styleUrls: ['./info-poke.component.css']
})
export class InfoPokeComponent implements OnInit {

  constructor(private rutaActiva: ActivatedRoute, private pokemon:PokemonService) { }
  id:number = 0;
  pokemonData:any;
  especie:any;
  infoColor:any;
  fotosUrl:any = [];
  moves:any = [];
  seeMoves:boolean = false;
  random:number = Math.floor((Math.random() * (44 - 0 + 1)) + 0);
  random2:number = Math.floor((Math.random() * (44 - 0 + 1)) + 0);
  random3:number = Math.floor((Math.random() * (44 - 0 + 1)) + 0);
  
  ngOnInit(): void {
    this.id = this.rutaActiva.snapshot.params['id'];

    this.getPokemon();
    this.getEspecie();
  }

  getPokemon(){
    this.pokemon.getPokemonData(this.id)?.subscribe(pokemonData => {
      console.log(pokemonData);
      this.pokemonData = pokemonData;
      this.getFotos(); 
      this.getMoves();   
    });
  }

  getEspecie(){
    this.pokemon.getEspecie(this.id)?.subscribe(especie => {
      this.especie = especie;
      console.log(especie);
      this.getColorInfo();
    })
  }

  getFotos(){
    if(this.pokemonData){
      for(let data in this.pokemonData.sprites){
        if(this.pokemonData.sprites[data] != null &&  typeof this.pokemonData.sprites[data] == 'string'){
          let fotoUrl = this.pokemonData.sprites[data];
          this.fotosUrl.push(fotoUrl);
        }
      }
      console.log(this.fotosUrl);
    }
  }

  getColorInfo(){
    this.pokemon.getColorInfo(this.especie.color.url).subscribe(color => {
      console.log(color);
      this.infoColor = color;
    })
  }

  getRandom(){
    let random:number = Math.floor((Math.random() * (44 - 0 + 1)) + 0); 
    let random2:number = Math.floor((Math.random() * (44 - 0 + 1)) + 0); 
    let random3:number = Math.floor((Math.random() * (44 - 0 + 1)) + 0);
    
    this.random = random;
    this.random2 = random2;
    this.random3 = random3;
  }

  getMoves(){
    for (let index = 0; index < 10; index++) {
      let move = this.pokemonData.moves[index];
      this.moves.push(move.move.name);
    }
    console.log(this.moves);
  }

  seeAllMoves(){
    if(this.seeMoves) this.seeMoves = false;
    else this.seeMoves = true;
  }

}

