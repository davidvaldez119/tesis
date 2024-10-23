import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.css']
})
export class carruselComponent implements OnInit {
  topRatedMovies: any[] = [];
  searchQuery: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadTopRatedMovies();
  }

  loadTopRatedMovies() {
    this.http.get('https://api.themoviedb.org/3/movie/top_rated?api_key=c130076811f0e957626523dba642db29&language=es-US&page=1')
      .subscribe((response: any) => {
        if (response && response.results) {
          this.topRatedMovies = response.results.slice(0, 5); 
        }
      }, error => {
        console.error('Error al obtener las películas:', error);
      });
  }
}