import { CommonModule, Location, TitleCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonPiePipe } from '../../cardsPokemons/pipes/pokemonPie.pipe';

@Component({
  selector: 'app-detailPokemon',
  standalone: true,
  templateUrl: './detailPokemon.component.html',
  styleUrls: ['./detailPokemon.component.scss'],
  imports: [TitleCasePipe, PokemonPiePipe, CommonModule]
})
export  class DetailPokemonComponent implements OnInit {
  name: string = '';
  type: string = '';
  imgUrl: string = '';
  height: number = 0;
    abilities: string[] = [];

  constructor( private location: Location, private router: Router) {
    const nav = this.location.getState() as { name?: string; type?: string; img?: string; height?: number, abilities?: string[] };
    this.name = nav.name || '';
    this.type = nav.type || 'Desconocido';
    this.imgUrl = nav.img || '';
    this.height = nav.height || 0 ;
    this.abilities = nav.abilities || [];
  }

  ngOnInit() {
    
  }
   goBackToHome() {
    this.router.navigate(['']);
  }

}
