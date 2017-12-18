import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Works } from '../models/works.model';

@Injectable()
export class HttpService {
  headers = new HttpHeaders({
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Credentials': 'true'
  });
  constructor(private http: HttpClient) { }
    // dev http://localhost:3000/
    // prod http://neolife.orgfree.com/
    // GET WORKS
   setUrl(val: string = '') {
      return 'http://localhost:3000/' + val;
    }
  getWorks(): Observable<any> {
    return this.http.get(this.setUrl('db.json'), {
      headers: this.headers
    });
  }
  // ADD WORK
  addWork(work: Works) {
    const data = {
      name: work.name,
      img: work.img,
      href: work.href,
      content: work.content
    };
    return this.http.post(this.setUrl('works'), data, {
      headers: this.headers
    });
  }
  // GET USERS
  getUser(): Observable<any> {
    return this.http.get(this.setUrl('db.json'), {
      headers : this.headers
    });
  }
}
