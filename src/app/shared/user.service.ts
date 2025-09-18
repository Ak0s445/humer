import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userList = [
    {id:1, username: "pali"},
    {id:2, username:"robi"}
  ]
//ez a 2 felhasználó még nem backendből jön, de majd backendből fog jönni
  constructor(private http: HttpClient) { }

  getUsers() {
    const url = 'http://localhost:8000/api/users'
   return this.http.get(url)  //http requesttel lekérjük am szerepel a backendben
   //de még nem az adatokat adja vissza
  }
  createUsers() {

  }
}
