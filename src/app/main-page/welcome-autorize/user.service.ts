import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { User } from '../../user';

@Injectable()
export class UserService {
  constructor(private http: HttpClient) { }
  getUser(): Observable<any> {
    return this.http.get('http://localhost:3000/users');
  }
}
