import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.css']
})
export class ReviewListComponent implements OnInit {
  @Input() peliculaID: number = 23;
  userId: number = 1; 
  reviews: any[] = []; 
  newReview = { score: '', description: '' }; 

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

  addReview() {
    const newReviewData = {
      idProfile: this.userId, 
      idMovie: this.peliculaID,   
      score: this.newReview.score,
      description: this.newReview.description 
    };

    this.http.post('http://localhost:3000/comments', newReviewData).subscribe(
      (response) => {
        console.log('Reseña agregada:', response);
        this.reviews.push(response); 
        this.newReview = { score: '', description: '' }; 
      },
      (error) => {
        console.error('Error al agregar la reseña:', error);
      }
    );
  }
}
