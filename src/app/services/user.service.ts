import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';




@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  protected url ='https://reqres.in/api/users'
  getUsers(): Observable<any> {

     return this.http.get(this.url).pipe(map(res=>res));
  }
}
