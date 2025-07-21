import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
   {
    path: '',
    component: HomeComponent
   },
   {
    path: 'detail/:name',
    loadComponent: () => import('./components/detail/detailPokemon/detailPokemon.component').then(m => m.DetailPokemonComponent)
   },
   {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
},
];
