import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Thought } from './thoughts';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThougthsService {

  private readonly API = "http://localhost:3000/thoughts"

  constructor(private http: HttpClient) { }

  list(): Observable<Thought[]> {
    return this.http.get<Thought[]>(this.API);
  }

  create(thougth: Thought): Observable<Thought> {
    return this.http.post<Thought>(this.API, thougth);
  }

  update(thougth: Thought): Observable<Thought> {
    const url = `${this.API}/${thougth.id}`
    return this.http.put<Thought>(url, thougth)
  }

  delete(id: number): Observable<Thought> {
    const url = `${this.API}/${id}`
    return this.http.delete<Thought>(url);
  }

  searchById(id: number): Observable<Thought> {
    const url = `${this.API}/${id}`;
    return this.http.get<Thought>(url);
  }

}
