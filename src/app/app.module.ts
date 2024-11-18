import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReviewLandingComponent } from './Pages/review-landing/review-landing.component';
import { CarruselComponent } from './Components/carrusel/carrusel.component';
import { BarraSuperiorComponent } from './Components/barra-superior/barra-superior.component';
import { MovieReviewComponent } from './Components/movie-review/movie-review.component';
import { SearchboxComponent } from './Components/searchbox/searchbox.component';
import { AppRoutingModule } from './app-routing.module';
import { ProfilePageComponent } from './Pages/profile-page/profile-page.component';
import { LoginComponent } from './Components/login/login.component';
import { SignupComponent } from './Components/signup/signup.component';
import { SharedModule } from "./shared/shared.module";
import { provideHttpClient } from '@angular/common/http';
import { MovieSearchComponent } from './Components/movie-search/movie-search.component';
import { ReviewListComponent } from './Components/review-list/review-list.component';
import { FooterComponent } from './Components/footer/footer.component';
import { DetallePerfilComponent } from './Components/detalle-perfil/detalle-perfil.component';



@NgModule({
  declarations: [
    AppComponent,
    CarruselComponent,
    BarraSuperiorComponent,
    MovieReviewComponent,
    ReviewLandingComponent,
    SearchboxComponent,
    ProfilePageComponent,
    LoginComponent,
    SignupComponent,
    MovieSearchComponent,
    ReviewListComponent,
    FooterComponent,
    DetallePerfilComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    SharedModule,
    ReactiveFormsModule
],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
