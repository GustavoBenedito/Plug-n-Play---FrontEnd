import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MyGamesComponent } from './components/my-games/my-games.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'mygames', component: MyGamesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
