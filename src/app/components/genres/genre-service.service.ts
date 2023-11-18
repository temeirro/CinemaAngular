import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { IGenre } from './genre-card/genre';

@Injectable({
  providedIn: 'root'
})
export class GenreServiceService {
  private url:string;

  constructor(private http: HttpClient) {
    this.url = environment.apiUrl + 'genres';
   }
  getAll():Observable<IGenre[]>{
    return this.http.get<IGenre[]>(this.url);
  }

  getById(id : number):Observable<IGenre>{
    return this.http.get<IGenre>(`${this.url}/${id}`);
  }
  delete(id: number): Observable<any> {
    return this.http.delete<IGenre>(`${this.url}/${id}`);
  }
  create(genre : IGenre):Observable<any>{
    return this.http.post(`${this.url}/create`,genre);
  }
  edit(genre : IGenre):Observable<any>{
    return this.http.put(`${this.url}/edit`,genre);
  }
}