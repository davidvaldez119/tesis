import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.css']
})
export class ReviewListComponent implements OnInit {
  @Input() peliculaID: number = 23;
  userId: number = 2;
  reviews: any[] = [];
  newReview = { score: '', description: '' };
  starRating = 0; 

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
  this.loadReviews();
}

loadReviews() {
  this.http.get<any[]>(`http://localhost:3000/comments?idMovie=${this.peliculaID}`).subscribe(
    (reviews) => {
      this.reviews = reviews;
    },
    (error) => {
      console.error('Error al cargar reseñas:', error); 
    }
  );
}

  setStarRating(star: number) {
    this.starRating = star ;
    this.newReview.score = this.starRating.toString();
  }

  addReview() {
    const newReviewData = {
      idProfile: this.userId,
      idMovie: this.peliculaID,
      score: this.newReview.score,
      description: this.newReview.description
    };
  
    this.http.post('http://localhost:3000/comments', newReviewData).subscribe(
      (response) => {
        this.reviews.push(response); 
        this.newReview = { score: '', description: '' }; 
        this.starRating = 0; 
      },
      (error) => {
        console.error('Error al agregar la reseña:', error); 
      }
    );
  }
  deleteReview(reviewId: number) {
    this.http.delete(`http://localhost:3000/comments/${reviewId}`).subscribe(
      () => {
        console.log('Reseña eliminada con ID:', reviewId);
        this.reviews = this.reviews.filter((review) => review.id !== reviewId);
      },
      (error) => {
        console.error('Error al eliminar la reseña:', error);
      }
    );
  }
}
