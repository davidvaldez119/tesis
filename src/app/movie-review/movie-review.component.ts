import { Component } from '@angular/core';


@Component({
  selector: 'app-movie-review',
  templateUrl: './movie-review.component.html',
  styleUrl: './movie-review.component.css'
})
export class MovieReviewComponent {
  stars: number = 0;
  maxStars: number = 5;

  rate(star: number) {
    this.stars = star;}
}
