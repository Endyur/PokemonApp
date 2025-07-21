import { Location, TitleCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonPiePipe } from '../../cardsPokemons/pipes/pokemonPie.pipe';

@Component({
  selector: 'app-detailPokemon',
  templateUrl: './detailPokemon.component.html',
  styleUrls: ['./detailPokemon.component.scss'],
  imports: [TitleCasePipe, PokemonPiePipe]
})
export  class DetailPokemonComponent implements OnInit {
  name: string = '';
  type: string = '';
  imgUrl: string = '';
  height: number = 0;
  constructor( private location: Location) {
    const nav = this.location.getState() as { name?: string; type?: string; img?: string; height?: number  };
    this.name = nav.name || '';
    this.type = nav.type || 'Desconocido';
    this.imgUrl = nav.img || '';
    this.height = nav.height || 0 ;
  }

  ngOnInit() {
    
  }

}
