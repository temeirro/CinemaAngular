import { Component, OnInit } from '@angular/core';
import { IGenre } from '../genre-card/genre';
import { GenreServiceService } from '../genre-service.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-genre',
  templateUrl: './edit-genre.component.html',
  styleUrls: ['./edit-genre.component.css']
})
export class EditGenreComponent implements OnInit{
  genre?: IGenre;
  genreForm!:FormGroup;

  constructor(private fb:FormBuilder, 
    private genreService:GenreServiceService,
    private router: Router,
    private activeRoute: ActivatedRoute) {

      this.activeRoute?.params.subscribe(params => {
        let id = params["id"];
        console.log(id);
        this.genreService.getById(id).subscribe(res=>{
          this.genre = res;
        });
        });
    }
    ngOnInit(): void {
    
      this.genreForm=this.fb.group({
        name: this.genre?.name,
      });
    }
    editGenre(){
      let item = this.genreForm.value as IGenre;
      this.activeRoute?.params.subscribe(params => {
          let id = params["id"];
          item.id = id;
        this.genreService.edit(item).subscribe(res=>{
          console.log("Item edited");
          this.router.navigate(['genres']);
        })
        });
    
      
    }
}
