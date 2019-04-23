import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Match } from '../models/match';
import { Observable } from 'rxjs';
//import axios from "axios";

@Injectable({
  providedIn: 'root'
})
export class MatchService {
  //url of the server
  // data:Object[];
  API_URL='http://localhost:3000'

  constructor(private http:HttpClient) { }
  // probably this need like parameter the date

    create(match: Match): Observable<Match> {
      return this.http
        .post<Match>(`${this.API_URL}/api/match`, match);
    }
  
    findAll(){
      // console.log(`calling ${this.API_URL}/api/match`)
      return  this.http.get(`${this.API_URL}/api/match`);
    }
    find(matID){
      console.log(`calling ${this.API_URL}/api/match/`+matID)
      return  this.http.get(`${this.API_URL}/api/match/`+matID);
    }

    addSubstitute(id,substitute){
      return  this.http.patch(`${this.API_URL}/api/match/${id}/substitute`,substitute);
    }


    addCommentary(id,commentary){
      return  this.http.patch(`${this.API_URL}/api/match/${id}/commentary`,commentary);
    }


    addEvent(id,event){
      return  this.http.patch(`${this.API_URL}/api/match/${id}/event`,event);
    }


    addStatistics(id,event){
      return  this.http.patch(`${this.API_URL}/api/match/${id}/statistic`,event);
    }
}
