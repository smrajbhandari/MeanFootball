import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  API_URL = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  create(user) {
    return this.http
      .post(`${this.API_URL}/users`, user);
  }

  checkExistingEmail(email: string) {
    return this.http
      .get(`${this.API_URL}/users/check_existing_email?email=${email}`);
  }

  login(user) {
    return this.http
      .post(`${this.API_URL}/users/login`, user);
  }
}