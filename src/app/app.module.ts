import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CarruselComponent } from './app/carrusel/carrusel.component';
import { BarraSuperiorComponent } from './app/barra-superior/barra-superior.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CarruselComponent,
    BarraSuperiorComponent
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

