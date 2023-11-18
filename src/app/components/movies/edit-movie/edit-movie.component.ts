import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { MOVIES } from '../movies-mock-data';
import { ICreateMovie, IEditMovie, IGenre, IMovie } from '../movie';
import { MovieService } from '../movie.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.css']
})

export class EditMovieComponent implements OnInit {
  movie?: IMovie;
  genres!:IGenre[]|undefined;
  allGenres!:IGenre[]|undefined;
  movieForm!:FormGroup;

  constructor(private fb:FormBuilder, 
    private movieService:MovieService,
    private router: Router,
    private activeRoute: ActivatedRoute) {
      this.movieService.getGenres().subscribe(res=>{
        console.log(res);
        this.allGenres=res;
      })
    this.activeRoute?.params.subscribe(params => {
      let id = params["id"];
      console.log(id);
      // this.movie=MOVIES.find(m=>m.id==id);
      this.movieService.getById(id).subscribe(res=>{
        this.movie = res;
        this.genres = res.genres;
      });
    });
  }
  ngOnInit(): void {
    
    this.movieForm=this.fb.group({
      title: this.movie?.title,
      year: this.movie?.year,
      imageUrl: this.movie?.imageUrl,
      description: this.movie?.description,
      duration:this.movie?.duration,
      genresIds: this.movie?.genres
    });
  }
  

  editMovie(){
    // let item = this.movieForm.value as IEditMovie;

    // this.activeRoute?.params.subscribe(params => {
    //   let id = params["id"];
    //   item.id = id;
    //   item.duration+=":00";
    // this.movieService.edit(item).subscribe(res=>{
    //   console.log("Item edited");
    //   this.router.navigate(['movies']);
    // })
    // });
   
    
  }

 
}
