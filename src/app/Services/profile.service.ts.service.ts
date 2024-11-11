import { Injectable } from '@angular/core';
import { BehaviorSubject,map,of,catchError,tap } from 'rxjs';
import { Profile } from '../Interfaces/profileIn';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

   private baseUrl = 'http://localhost:3000/profiles'

   private activeUserSubject = new BehaviorSubject<Profile | undefined>(undefined);
   
  constructor(private http: HttpClient) { }

  auth() {
    return this.activeUserSubject.asObservable();
  }

  signup(user: Profile) {
    return this.http.post<Profile>(this.baseUrl, user).pipe(
      map((u) => {
        this.activeUserSubject.next(u);
        return true;
      })
    )
  }

  login(user: Profile) {
    return this.http.get<Profile[]>(`${this.baseUrl}?userName=${user.userName}`).pipe(
      map(([u]) => {
        if (u && u.password === user.password) {
          this.activeUserSubject.next(u);
          return true
        }
        return false;
      }),
      catchError(() => of(false))
    );
  }

  logout() {
    this.activeUserSubject.next(undefined);
    return of(true);
  }

}
