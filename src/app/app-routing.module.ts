import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoPokeComponent } from './components/info-poke/info-poke.component';
import { InicioComponent } from './components/inicio/inicio.component';

const routes: Routes = [
  {
    pathMatch:'full',
    path: '', component:InicioComponent
  },
  {
    path: 'info-poke/:id', component:InfoPokeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
