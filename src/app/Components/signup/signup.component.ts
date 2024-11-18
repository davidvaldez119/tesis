import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { ProfileService } from '../../Services/profile.service.ts.service';
import { Profile } from '../../Interfaces/profileIn';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  private formBuilder = inject(FormBuilder);

  form = this.formBuilder.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]],
    date: ['', [Validators.required]],
    cel: ['', [Validators.required]],
    email: ['', [Validators.required]]
  })

  constructor(
    private profileService: ProfileService,
    private router: Router
  ) { }

  onSignup() {
    if (this.form.invalid) return;

    const user= this.form.getRawValue() as unknown as Profile;

    this.profileService.signup(user).subscribe({
      next: () => {
        this.router.navigate(['/']);
      }
    })
  }
}
