import { Component, Input, OnInit } from '@angular/core';
import { IGenre } from '../genre-card/genre';
import { ActivatedRoute, Router } from '@angular/router';
import { GenreServiceService } from '../genre-service.service';

@Component({
  selector: 'app-genre-card',
  templateUrl: './genre-card.component.html',
  styleUrls: ['./genre-card.component.css']
})
export class GenreCardComponent{
  @Input()
  genre!:IGenre;
  constructor(
    private genreService:GenreServiceService
    )
    {
    }


    deleteGenre(){
      console.log(this.genre.id);
      this.genreService.delete(this.genre.id).subscribe(res=>{
        console.log("Genre deleted");
        window.location.reload();
      })
    }
}
