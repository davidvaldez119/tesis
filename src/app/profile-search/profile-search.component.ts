import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ProfileService } from '../Services/profile.service.ts.service';
import { Profile } from '../Interfaces/profileIn';

@Component({
  selector: 'app-profile-search',
  templateUrl: './profile-search.component.html',
  styleUrl: './profile-search.component.css'
})
export class ProfileSearchComponent implements OnInit{
  buscar = '';
  perfiles: Profile[] = [];
  query: string = ''; // Término de búsqueda
  profiles: Profile[] = [];
  //reviews: Review[] = [];
  searchResults: Profile[] = [];
  noResults: boolean = false;
  constructor(private profileService: ProfileService, private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {

    this.buscarPerfiles()

    this.buscar = this.route.snapshot.paramMap.get('query')??"";
        
        if(this.buscar != "" )
           this.buscarPerfiles();
            
    
  }

  buscarPerfiles(): void {
    if (this.query === '') {
      this.noResults = false;
      return;
    }
    this.profileService.getProfiles(this.query).subscribe({
      next: (response) => {
        this.profiles = response.profiles;
       // this.reviews = response.review;
        this.searchResults = this.profiles.filter(profile =>
          profile.username.toLowerCase().includes(this.query.toLowerCase())
        );
        this.noResults = this.searchResults.length === 0;
      },
      error: (err) => {
        console.error('Error fetching profiles:', err);
      }
    });
 /* buscarPerfiles(): void {
    this.http.get(`http://localhost:3000/profiles?q=${this.buscar}`)
      .subscribe((response: any) => {
        this.perfiles = response;
      });
  }*/
}
onSearchChange(query: string): void {
  this.query = query;
  this.buscarPerfiles();
}
}
