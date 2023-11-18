import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICreateMovie, IEditMovie, IGenre, IMovie } from './movie';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private url:string;

  constructor(private http: HttpClient) {
    this.url = environment.apiUrl + 'movies';
   }
  getAll():Observable<IMovie[]>{
    return this.http.get<IMovie[]>(this.url);
  }

  getById(id : number):Observable<IMovie>{
    return this.http.get<IMovie>(`${this.url}/${id}`);
  }
  delete(id: number): Observable<any> {
    return this.http.delete<IMovie>(`${this.url}/${id}`);
  }
  create(movie : ICreateMovie):Observable<any>{
    return this.http.post(`${this.url}/create`,movie);
  }
  edit(movie : IEditMovie):Observable<any>{
    return this.http.put(`${this.url}/edit`,movie);
  }
  getGenres():Observable<IGenre[]>{
    return this.http.get<IGenre[]>(`${this.url}/genres`); 
  }
}

