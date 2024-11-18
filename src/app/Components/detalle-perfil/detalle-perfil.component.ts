
import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../Services/profile.service.ts.service';
import { ReviewService } from '../../Services/review.service';
import { Profile } from '../../Interfaces/profileIn';

@Component({
  selector: 'app-detalle-perfil',
  templateUrl: './detalle-perfil.component.html',
  styleUrls: ['./detalle-perfil.component.css']
})
export class DetallePerfilComponent implements OnInit {
  userProfile: Profile | undefined;
  reviews: any[] = [];
  userLoggedIn: boolean = false;

  constructor(
    private profileService: ProfileService,
    private reviewService: ReviewService
  ) {}

  ngOnInit(): void {
    this.loadUserProfile();
    this.loadUserReviews();
  }

  loadUserProfile() {
    this.profileService.auth().subscribe(user => {
      if (user) {
        this.userProfile = user;
        this.userLoggedIn = true;
      } else {
        this.userLoggedIn = false;
      }
    });
  }

  loadUserReviews() {
    if (this.userProfile && this.userProfile.id) {
      const profileId = Number(this.userProfile.id);  
      this.reviewService.getReviewsByUserId(profileId).subscribe((reviews) => {
        this.reviews = reviews;
      });
    }
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