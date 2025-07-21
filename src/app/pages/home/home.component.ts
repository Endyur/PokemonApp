import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { PokemonServiceService } from '../../services/pokemonService.service';
import { CardsPokemonsComponent } from '../../components/cardsPokemons/cardsPokemons/cardsPokemons.component';
import { Result } from '../../components/interface/dataPokemon.interface';
import { CommonModule } from '@angular/common';
import { debounceTime, Subject, Subscription } from 'rxjs';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [CardsPokemonsComponent, CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  @ViewChild('mainCards') mainCards!: ElementRef;
  title = 'Pokemon App';
  allPokemons: Result[] = [];
  filteredPokemons: Result[] = [];
  searchTerm: string = '';
  isLoading: boolean = false;
  page: number = 1;
  types: { name: string; value: string }[] = []
  selectedType: string = '';
  tipos: string[] = [];
  nameFilter: string = '';
  typeFilter: string = '';

  constructor(private _srvPokemon: PokemonServiceService) { }
  private searchSubject = new Subject<{ type: string, name: string }>();
  private searchSubscription!: Subscription;
  ngOnInit(): void {
    this.getTypePokemons();
    this.getPokemons();

    this.searchSubscription = this.searchSubject
      .subscribe((term: { type: string; name: string }) => {
        this.filteredPokemons = this.allPokemons.filter((p: Result) => {
          const matchesName = term.name
            ? p.name.toLowerCase().includes(term.name.toLowerCase())
            : true;

          const matchesType = term.type
            ? p.type?.toLowerCase() === term.type.toLowerCase()
            : true;

          return matchesName && matchesType;
        });
      });
  }
  onInputChange(event: string) {
    this.nameFilter = event;
    this.searchSubject.next({ type: this.typeFilter, name: this.nameFilter });


  }
  onChangeSelectType(event: any) {
    this.typeFilter = event.target.value;
    this.searchSubject.next({ type: this.typeFilter, name: this.nameFilter });

  }
  async getPokemons() {
    this.isLoading = true;
    this._srvPokemon.getPokemons(this.page).subscribe({
      next: (data: any) => {
        setTimeout(async () => {

          this.isLoading = false;
          this.page++;

          const newPokemons = await Promise.all(data.results.map(async (pokemon: Result) => {
            const info = await this._srvPokemon.getInfoPokemon(pokemon.name);
            const { height, types } = info;

            return {
              ...pokemon,
              type: types?.[0]?.type?.name ?? 'Desconocido',
              height: height ?? 'Alltura desconocida'
            };
          }));

          this.allPokemons = [...this.allPokemons, ...newPokemons];

          this.searchSubject.next({ type: this.typeFilter, name: this.nameFilter });

        }, 1500);

      },
      error: (error) => {
        this.isLoading = false;
      }
    });
  }
  onScroll(e: any) {
    const element = e.target;
    if (Math.round(this.mainCards.nativeElement.clientHeight + this.mainCards.nativeElement.scrollTop) >= this.mainCards.nativeElement.scrollHeight) {
      this.getPokemons();
    }
  }


  getTypePokemons() {
    this._srvPokemon.getTypesAllPokemons().subscribe({
      next: (data) => {
        this.types = data.results.map((type: any) => ({
          name: type.name,
          value: type.name
        }));
        console.log('Types:', this.types);
      },
      error: (error) => {
        console.error('Error fetching Pokemon types:', error);
      }
    });
  }

  ngOnDestroy(): void {
    this.searchSubscription.unsubscribe();
  }

}
