import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CarruselComponent } from './carrusel/carrusel.component';
import { BarraSuperiorComponent } from './barra-superior/barra-superior.component';
import { MovieReviewComponent } from './movie-review/movie-review.component';
import { ReviewLandingComponent } from './review-landing/review-landing.component';

@NgModule({
  declarations: [
    AppComponent,
    CarruselComponent,
    BarraSuperiorComponent,
    MovieReviewComponent,
    ReviewLandingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

