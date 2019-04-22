import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
  
    findAll(){
      // console.log(`calling ${this.API_URL}/api/match`)
      return  this.http.get(`${this.API_URL}/api/match`);
    }

  // swagat this must be async?
  // async findAll(){
  //   const resultPromise = await this.http.get('https://randomuser.me/api/?results=10');
  //   console.log(resultPromise.data)
  //   this.data= resultPromise.data.results ;
  // }
}