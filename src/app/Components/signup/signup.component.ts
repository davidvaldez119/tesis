import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { ProfileService } from '../../Services/profile.service.ts.service';
import { Profile } from '../../Interfaces/profileIn';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  private formBuilder = inject(FormBuilder);

  form = this.formBuilder.group({
    username: ['', [Validators.required, Validators.minLength(3)]], // username mínimo 3 caracteres
    password: ['', [Validators.required, Validators.minLength(6)]], // password mínimo 6 caracteres
    date: ['', [Validators.required]], // fecha de nacimiento es obligatoria
    cel: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]], // número de celular debe tener 10 dígitos
    email: ['', [Validators.required, Validators.email]] // correo debe tener un formato válido
  });

  constructor(
    private profileService: ProfileService,
    private router: Router
  ) { }

  onSignup() {
    if (this.form.invalid) return;

    const user = this.form.getRawValue() as unknown as Profile;

    this.profileService.signup(user).subscribe({
      next: () => {
        this.router.navigate(['/']);
      }
    });
  }

  // Métodos auxiliares para verificar el estado de validación de los campos
  get username() {
    return this.form.get('username');
  }

  get password() {
    return this.form.get('password');
  }

  get date() {
    return this.form.get('date');
  }

  get cel() {
    return this.form.get('cel');
  }

  get email() {
    return this.form.get('email');
  }
}
