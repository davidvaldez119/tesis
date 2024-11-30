import { Component, OnInit } from '@angular/core';
import { TmdbService } from '../../Services/tmdb.service';
import { MoviesIn } from '../../Interfaces/movieIn';

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.css']
})
export class CarruselComponent implements OnInit {
  topRatedMovies: MoviesIn[] = [];
  currentSlideIndex: number = 0;
  maxVisibleMovies: number = 5;

  constructor(private tmdbService: TmdbService) {}

  ngOnInit() {
    this.loadTopRatedMovies();
  }

  loadTopRatedMovies() {
    this.tmdbService.getTopRatedMovies().subscribe(
      (response: any) => {
        if (response && response.results) {
          this.topRatedMovies = response.results.slice(0, 10);
          console.log('Películas cargadas:', this.topRatedMovies);
        }
      },
      (error) => {
        console.error('Error al obtener las películas:', error);
      }
    );
  }

  prevSlide() {
    if (this.currentSlideIndex > 0) {
      this.currentSlideIndex--;
    }
    this.updateCarousel();
  }

  nextSlide() {
    const maxIndex = this.topRatedMovies.length - this.maxVisibleMovies;
    if (this.currentSlideIndex < maxIndex) {
      this.currentSlideIndex++;
    }
    this.updateCarousel();
  }

  updateCarousel() {
    const movieList = document.querySelector('.movie-list') as HTMLElement;
    const movieWidth = 150 + 15; 
    movieList.style.transform = `translateX(-${this.currentSlideIndex * movieWidth}px)`;
  }

  isNextButtonDisabled(): boolean {
    return this.currentSlideIndex >= this.topRatedMovies.length - this.maxVisibleMovies;
  }
}
