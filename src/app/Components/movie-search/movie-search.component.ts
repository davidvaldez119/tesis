// movie-search.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TmdbService } from '../../Services/tmdb.service';


@Component({
    
    selector: 'app-movie-search',
    
    templateUrl: './movie-search.component.html',
 
    styleUrls: ['./movie-search.component.css']
})


export class MovieSearchComponent implements OnInit {
    
    busqueda: string = "";
    resultados: any; 
    

    constructor(private movieService: TmdbService, private route: ActivatedRoute) {}

    ngOnInit(): void {
        this.busqueda = this.route.snapshot.paramMap.get('query')??"";
        
        if(this.busqueda != "" )
    this.buscar();
            
    }

        buscar() {
         this.movieService.searchMovies(this.busqueda)
        .subscribe(Response => {
         this.resultados = Response['results'];
          console.log(Response)
         });
        }
    }


    /*getMovies(searchTerm: string) {
       
        
        this.movieService.getMovies(searchTerm).subscribe(data => {
            console.log(data);
           
                this.movies = data.Search;
            
           
        })
                */