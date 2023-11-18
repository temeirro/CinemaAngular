import { Component, OnInit } from '@angular/core';
import { GenreServiceService } from '../genre-service.service';
import { IGenre } from '../genre-card/genre';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-genre',
  templateUrl: './add-genre.component.html',
  styleUrls: ['./add-genre.component.css']
})
export class AddGenreComponent implements OnInit{
  genreForm!:FormGroup;

  constructor(private fb:FormBuilder, 
    private genreService:GenreServiceService,
    private router: Router,
    private activeRoute: ActivatedRoute)
    {
    }

    ngOnInit(): void {
      
      this.genreForm=this.fb.group({
        name:["",[Validators.required, Validators.minLength(3)]],
      });
    }

    addGenre(){
      let item = this.genreForm.value as IGenre;
   
      this.genreService.create(item).subscribe(res=>{
        console.log("Item added");
        this.router.navigate(['genres']);
      })
    }
}
