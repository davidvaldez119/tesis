import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from '../../Services/profile.service.ts.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {

  activeUser = false;

  constructor(private profileService: ProfileService, private router: Router) { }

  onLogout() {
    this.activeUser = false;
    return this.profileService.logout().subscribe({
      next: () => {
        this.router.navigate(['/']);
      }
    })
  }

  ngOnInit(): void {
    this.profileService.auth().subscribe({
      next:(user) => {
        if (user) {
          this.activeUser = true;
        }
      }
    })
  }
}
