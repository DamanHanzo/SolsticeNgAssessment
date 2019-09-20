import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Team } from '../models/Team';

@Injectable({
  providedIn: 'root'
})
export class NFLDataService {

  constructor(private http: HttpClient) {
    this.getJSON().subscribe(data => {
      console.log(data);
    });
  }

  public getJSON(): Observable<Team[]> {
    return this.http.get<Team[]>('./assets/nfl-data.json');
  }
}
