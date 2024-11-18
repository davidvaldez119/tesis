import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TmdbService } from '../../Services/tmdb.service';

@Component({
  selector: 'app-movie-review',
  templateUrl: './movie-review.component.html',
  styleUrls: ['./movie-review.component.css']
})
export class MovieReviewComponent implements OnInit {
  movieId: number = 0;
  movieDetails: any;

  constructor(private route: ActivatedRoute, private tmdbService: TmdbService) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.movieId = +params['id']; 
      this.loadMovieDetails();
    });
  }

  loadMovieDetails() {
    this.tmdbService.getMovieDetails(this.movieId).subscribe(
      (response) => {
        this.movieDetails = response;
        console.log('Detalles de la película:', this.movieDetails);
      },
      (error) => {
        console.error('Error al obtener los detalles de la película:', error);
      }
    );
  }
}
