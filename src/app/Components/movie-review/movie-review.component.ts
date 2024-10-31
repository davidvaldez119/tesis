import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-movie-review',
  templateUrl: './movie-review.component.html',
  styleUrls: ['./movie-review.component.css']
})

export class MovieReviewComponent implements OnInit {
  movieId: number = 0;
  movieDetails: any;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.movieId = +params['id'];
      this.loadMovieDetails();
    });
  }

  loadMovieDetails() {
    this.http
      .get(`https://api.themoviedb.org/3/movie/${this.movieId}?api_key=c130076811f0e957626523dba642db29&language=es-US`)
      .subscribe(
        (response) => {
          this.movieDetails = response;
        },
        (error) => {
          console.error('Error al obtener los detalles de la película:', error);
        }
      );
  }
}