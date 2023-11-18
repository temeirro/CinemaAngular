import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IGenre } from '../genre-card/genre';
import { GenreServiceService } from '../genre-service.service';

@Component({
  selector: 'app-genre-card-list',
  templateUrl: './genre-card-list.component.html',
  styleUrls: ['./genre-card-list.component.css']
})

export class GenreCardListComponent implements OnInit{
  genres:IGenre[]=[];
  constructor(private http: HttpClient, private genreService:GenreServiceService){
   // this.http.get<IMovie[]>('https://localhost:7078/api/Movies').subscribe(res=>{
   //    console.log(res);
   //    this.movies = res;
   //  }, error=>{
   //   console.warn("Error!");
   //  });
   genreService.getAll();
  }
 ngOnInit(): void {
   this.genreService.getAll().subscribe(res=>{
     console.log(res);
        this.genres = res;
      }, error=>{
       console.warn("Error!");
      });
 }
}
