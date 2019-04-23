import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Team } from '../models/team';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  private serviceUrl = 'http://localhost:3000/api/teams'

  constructor(private http: HttpClient) { }

  create(team: Team): Observable<Team>{
    return this.http
      .post<Team>(this.serviceUrl, team);
  }

  findAll(): Observable<Team[]> {
    return this.http
      .get<Team[]>(this.serviceUrl);
  }

  findOne(teamId: String): Observable<Team> {
    return this.http
      .get<Team>(`${this.serviceUrl}/${teamId}`);
  }

  update(team: Team): Observable<Team> {
    return this.http
      .put<Team>(`${this.serviceUrl}/${team._id}`, team);
  }

  delete(teamId: String): Observable<Team> {
    return this.http
      .delete<Team>(`${this.serviceUrl}/${teamId}`);
  }
}