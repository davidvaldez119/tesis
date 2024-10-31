import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarruselComponent } from './Components/carrusel/carrusel.component';
import { MovieReviewComponent } from './Components/movie-review/movie-review.component';



const routes: Routes = [
  { path: '', component: CarruselComponent },
  { path: 'movie-review/:id', component: MovieReviewComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}