import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Thought } from './thoughts';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThougthsService {
  private readonly API = 'http://localhost:3000/thoughts';

  constructor(private http: HttpClient) {}

  list(page: number, filter: string): Observable<Thought[]> {
    const itemsPerPage = 10;

    let params = new HttpParams()
      .set('_page', page)
      .set('_limit', itemsPerPage);

    if (filter.trim().length > 2) {
      params = params.set('q', filter);
    }

    return this.http.get<Thought[]>(this.API, { params });
  }

  create(thougth: Thought): Observable<Thought> {
    return this.http.post<Thought>(this.API, thougth);
  }

  update(thougth: Thought): Observable<Thought> {
    const url = `${this.API}/${thougth.id}`;
    return this.http.put<Thought>(url, thougth);
  }

  delete(id: number): Observable<Thought> {
    const url = `${this.API}/${id}`;
    return this.http.delete<Thought>(url);
  }

  searchById(id: number): Observable<Thought> {
    const url = `${this.API}/${id}`;
    return this.http.get<Thought>(url);
  }

  changeFavorite(thought: Thought): Observable<Thought> {
    thought.isFavorite = !thought.isFavorite;
    return this.update(thought);
  }
}
