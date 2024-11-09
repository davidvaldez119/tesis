import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { MovieService } from '../../movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-barra-superior',
  templateUrl: './barra-superior.component.html',
  styleUrl: './barra-superior.component.css'
})
export class BarraSuperiorComponent {
  busqueda: string = "";
 
    
  constructor( private router: Router) {
    
  }
  buscar() {
    
    this.router.navigate(['/search', this.busqueda])
}

 
}
