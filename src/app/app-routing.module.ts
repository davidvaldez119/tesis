import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarruselComponent } from './Components/carrusel/carrusel.component';
import { MovieReviewComponent } from './Components/movie-review/movie-review.component';
import { ProfilePageComponent } from './Pages/profile-page/profile-page.component';
import { LoginComponent } from './Components/login/login.component';
import { SignupComponent } from './Components/signup/signup.component';


const routes: Routes = [
  { path: '', component: CarruselComponent },
  { path: 'movie-review/:id', component: MovieReviewComponent },
  { path: 'profile-page', component: ProfilePageComponent},
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SignupComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
