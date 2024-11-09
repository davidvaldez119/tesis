import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root' })
export class MovieService {
    private apiKey: string = 'c130076811f0e957626523dba642db29'; // Reemplazamos con la API key
    private baseUrl: string = 'https://api.themoviedb.org/3';

    constructor(private Http: HttpClient ){}
    getQuery(query: string): Observable<any>{
        //const baseUrl = '${this.baseUrl}${query}';
        return this.Http.get(`${this.baseUrl}/search/movie?api_key=${this.apiKey}&query=${query}`);

       // return this.Http.get();

    }
    }
    /*constructor(private http: HttpClient) {}
    getMovies(searchTerm : string): Observable<any>{
        return this.http.get(this.baseUrl + '&s=' + searchTerm); //metodo creado para controloar si funciona cuando llamamos a la api
    }
*/