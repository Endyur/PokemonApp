import { TitleCasePipe } from '@angular/common';
import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonServiceService } from '../../../services/pokemonService.service';
import { PokemonPiePipe } from '../pipes/pokemonPie.pipe';
import { Result } from '../../interface/dataPokemon.interface';
import { RouterLink } from '@angular/router';



@Component({
  selector: 'app-cardsPokemons',
  templateUrl: './cardsPokemons.component.html',
  styleUrls: ['./cardsPokemons.component.scss'],
  providers: [TitleCasePipe],
  imports: [CommonModule, TitleCasePipe, PokemonPiePipe, RouterLink]
})
export class CardsPokemonsComponent implements OnInit {
  @Input() pokemons: Result []= [];
  id: string = '0';
  tipos: string[] = [];
  heights: string [] = [];
  constructor(private pokemonService: PokemonServiceService) { }

  ngOnInit() {
    
    
  }
  ngOnChanges(changes: SimpleChanges) {
        if (changes['pokemons'] && this.pokemons?.length) {
      // this.obtenerTipos();
    }
  }
  //   obtenerTipos() {
  //   this.tipos = []; 
  //   this.pokemons.forEach((pokemon, index) => {
  //     this.pokemonService.getInfoPokemon(pokemon.name).subscribe({
  //       next: (data : any) => {
  //         this.heights[index] = data.height ?? 'Alltura desconocida';
  //       },
  //       error: () => {
  //         this.tipos[index] = 'Error';
  //       }
  //     });
  //   });
  // }
 }



  
