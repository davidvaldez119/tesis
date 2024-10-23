import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { carruselComponent } from './app/carrusel/carrusel.component';
import { BarraSuperiorComponent } from './app/barra-superior/barra-superior.component';

@NgModule({
  declarations: [
    AppComponent,
    carruselComponent,
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

