import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-review-landing',
  templateUrl: './review-landing.component.html',
  styleUrls: ['./review-landing.component.css']
})
export class ReviewLandingComponent implements OnInit {
  reviewId!: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.reviewId = params.get('id')!;
      // Aquí podrías cargar los datos de la reseña usando este ID
    });
  }
}