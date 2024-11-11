import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ProfileService } from '../../Services/profile.service.ts.service';
import { Profile } from '../../Interfaces/profileIn';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  private formBuilder = inject(FormBuilder);

  form = this.formBuilder.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]]
  })

  constructor(
    private profileService: ProfileService,
    private router: Router
  ) { }

  onLogin() {
    if (this.form.invalid) return;

    const user = this.form.getRawValue() as unknown as Profile;

    this.profileService.login(user).subscribe({
      next: (loggedin) => {
        if (loggedin) {
          this.router.navigate(['/']);
        } 
      }
    })
  }
}
