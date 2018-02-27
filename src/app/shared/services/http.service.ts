import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Works } from '../models/works.model';
import { AngularFireDatabase } from 'angularfire2/database';
import { User } from '../../user';

@Injectable()
export class HttpService {
  constructor(private http: HttpClient, private db: AngularFireDatabase) { }
  // FIREBASE
  // Get Posts
  getPosts(): Observable<any> {
    return this.db.list('/posts').valueChanges();
  }
  // Add Post
  addPost(title, val) {
    const itemsRef = this.db.list('/posts');
    itemsRef.set(title, val);
  }
  // GET USERS
  getUser(): Observable<any> {
    return this.db.list<User>('/users').valueChanges();
  }
  // Get Works
  getWorks(): Observable<any> {
    return  this.db.list<Works>('/works').valueChanges();
  }
}
