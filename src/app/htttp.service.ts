import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class HtttpService {

  constructor(private http: Http) { }
  getData() {
    return this.http.get('https://angular-course-46a4e.firebaseio.com/name.json')
      .map((response: Response) => response.json());
  }

  sendData(user: any) {
    const body = JSON.stringify(user);
    //const headers = new Headers();
    //headers.append('Shembull', 'application/json');
    return this.http.post('https://angular-course-46a4e.firebaseio.com/data.json', body, {
      //headers: headers
    })
      .map((data: Response) => data.json())
      .catch(this.handleError);
  }
  getOwnData() {
    return this.http.get('https://angular-course-46a4e.firebaseio.com/data.json')
      .map((response: Response) => response.json());
  }
  private handleError(error: any) {
    console.log(error);
    return Observable.throw(error);
  }
}
