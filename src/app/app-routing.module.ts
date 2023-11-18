import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { GenreCardListComponent } from './components/genres/genre-card-list/genre-card-list.component';
import { MovieCardListComponent } from './components/movies/movie-card-list/movie-card-list.component';
import { MovieDetailsComponent } from './components/movies/movie-details/movie-details.component';
import { AddMovieComponent } from './components/movies/add-movie/add-movie.component';
import { AddGenreComponent } from './components/genres/add-genre/add-genre.component';
import { EditMovieComponent } from './components/movies/edit-movie/edit-movie.component';
import { EditGenreComponent } from './components/genres/edit-genre/edit-genre.component';
import { ErrorComponent } from './components/error/error.component';
import { LoginComponent } from './components/account/login/login.component';
import { SignupComponent } from './components/account/signup/signup.component';
import { AuthGuardService } from './auth-guard.service';


const routes: Routes = [
  {path:"",component: HomeComponent, title:"Cinema"},

  { path: 'movies', component: MovieCardListComponent, canActivate: [AuthGuardService], title:"Movies" },
  {path:"movie-details/:id", component: MovieDetailsComponent, title:"Movies"},
  {path:"edit-movie/:id", component: EditMovieComponent, title:"Edit movie"},
  {path:"edit-genre/:id", component: EditGenreComponent, title:"Edit genre"},
  {path:"add-movie", component: AddMovieComponent, title:"Add movie"},
  {path:"add-genre", component: AddGenreComponent, title:"Add genre"},
  {path:"login", component: LoginComponent, title:"Profile"},
  {path:"signup", component: SignupComponent, title:"Sign Up"},
  {path:"genres", component: GenreCardListComponent, canActivate: [AuthGuardService], title:"Genres" },
  {path:"**", component: ErrorComponent, title:"Error"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
