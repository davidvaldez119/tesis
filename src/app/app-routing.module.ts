import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReviewLandingComponent } from './Pages/review-landing/review-landing.component';

const routes: Routes = [
  { path: 'reviews/:id', component: ReviewLandingComponent },
  { path: '', redirectTo: '/reviews/1', pathMatch: 'full' }, // Ruta por si falla
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
