import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { MaterialModule } from './material/material.module';
import { MovieCardComponent } from './components/movies/movie-card/movie-card.component';
import { MovieCardListComponent } from './components/movies/movie-card-list/movie-card-list.component';
import { HomeComponent } from './components/home/home.component';
import { MovieDetailsComponent } from './components/movies/movie-details/movie-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddMovieComponent } from './components/movies/add-movie/add-movie.component';
import { FooterComponent } from './components/footer/footer.component';
import { ErrorComponent } from './components/error/error.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { EditMovieComponent } from './components/movies/edit-movie/edit-movie.component';
import { LoginComponent } from './components/account/login/login.component';
import { TokenInterceptor } from './token.interceptor';
import { SignupComponent } from './components/account/signup/signup.component';
import { GenreCardComponent } from './components/genres/genre-card/genre-card.component';
import { GenreCardListComponent } from './components/genres/genre-card-list/genre-card-list.component';
import { EditGenreComponent } from './components/genres/edit-genre/edit-genre.component';
import { AddGenreComponent } from './components/genres/add-genre/add-genre.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MovieCardComponent,
    MovieCardListComponent,
    HomeComponent,
    MovieDetailsComponent,
    AddMovieComponent,
    FooterComponent,
    ErrorComponent,
    EditMovieComponent,
    LoginComponent,
    SignupComponent,
    GenreCardComponent,
    GenreCardListComponent,
    EditGenreComponent,
    AddGenreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
