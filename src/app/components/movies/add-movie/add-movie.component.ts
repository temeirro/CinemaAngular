import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { MOVIES } from '../movies-mock-data';
import { ICreateMovie, IGenre, IMovie } from '../movie';
import { MovieService } from '../movie.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {
  movies:IMovie[]=MOVIES;
  movieForm!:FormGroup;
  genres!:IGenre[];
  findInfo?: FormControl;
  constructor(private fb:FormBuilder, 
  private movieService:MovieService,
  private router: Router,
  private activeRoute: ActivatedRoute)
  {
  }
  
  ngOnInit(): void {
    this.movieService.getGenres().subscribe(res=>{
      console.log(res);
      this.genres=res;
    })
    this.movieForm=this.fb.group({
      title:["",[Validators.required, Validators.minLength(3)]],
      year:[new Date().getFullYear(), Validators.max(new Date().getFullYear())],
      imageUrl: "",
      description: "",
      duration:'01:30',
      genresIds: [[]]
    });
    // this.findInfo = new FormControl("find");
  }

  addMovie(){
    let item = this.movieForm.value as ICreateMovie;
    item.duration+=":00";
    // let id = this.movies[this.movies.length-1].id + 1;
    // let item=this.movieForm?.value;
    // item.id = id;
    // this.movies.push(item);
    this.movieService.create(item).subscribe(res=>{
      console.log("Item added");
      this.router.navigate(['movies']);
    })
  }

  // addMovieWithParam(formFull: FormGroupDirective) {
  //   let item = this.movieForm.value;
  //   console.log(item);
  //   console.log(formFull.valid);
  //   console.log(formFull.value.year);
  //   console.log(formFull.value.genres);
  // }
}
