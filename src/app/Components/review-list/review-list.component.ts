import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReviewService } from '../../Services/review.service';
import { ProfileService } from '../../Services/profile.service.ts.service';

@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.css'],
})
export class ReviewListComponent implements OnInit {
  @Input() peliculaID: number = 23;
  userId: number | undefined = undefined;
  reviews: any[] = [];
  reviewForm: FormGroup;
  starRating = 0;
  userLoggedIn: boolean = false; 

  constructor(
    private reviewService: ReviewService,
    private profileService: ProfileService, 
    private fb: FormBuilder
  ) {
    this.reviewForm = this.fb.group({
      score: ['', Validators.required],
      description: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

  ngOnInit(): void {
    this.loadReviews();
    this.getUserId(); 
  }

  loadReviews() {
    this.reviewService.getReviewsByMovieId(this.peliculaID).subscribe(
      (reviews) => {
        this.reviews = reviews;
      },
      (error) => {
        console.error('Error al cargar reseñas:', error);
      }
    );
  }

  setStarRating(star: number) {
    this.starRating = star;
    this.reviewForm.get('score')?.setValue(this.starRating);
  }


  getUserId() {
    this.profileService.auth().subscribe((user) => {
      if (user?.id) {
        this.userId = Number(user.id);
        this.userLoggedIn = true; 
      } else {
        this.userId = undefined;
        this.userLoggedIn = false; 
      }
    });
  }

  addReview() {
    if (this.reviewForm.invalid) {
      this.reviewForm.markAllAsTouched();
      return;
    }

    if (!this.userLoggedIn) {
      alert('Debes estar logueado para dejar una reseña.');
      return; 
    }

    if (this.userId === undefined) {
      console.error('Usuario no logueado');
      return;
    }

    const newReviewData = {
      idProfile: this.userId,
      idMovie: this.peliculaID,
      score: this.reviewForm.value.score,
      description: this.reviewForm.value.description,
    };

    this.reviewService.addReview(newReviewData).subscribe(
      (response) => {
        this.reviews.push(response);
        this.reviewForm.reset();
        this.starRating = 0;
      },
      (error) => {
        console.error('Error al agregar la reseña:', error);
      }
    );
  }


  deleteReview(reviewId: number) {
    this.reviewService.deleteReviewById(reviewId).subscribe(
      () => {
        this.reviews = this.reviews.filter((review) => review.id !== reviewId);
      },
      (error) => {
        console.error('Error al eliminar la reseña:', error);
      }
    );
  }
  
}
