import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private url = 'https://frontend-test-assignment-api.abz.agency/api/v1/positions';

  constructor(private http: HttpClient) { }

  getPositions(): Observable<object> {
    return this.http.get(`${this.url}`);
  }

  getToken() {
    return this.http.get<any>('https://frontend-test-assignment-api.abz.agency/api/v1/token');
  }

  postUser(formValue): Observable<object> {
    let token ;
    this.getToken().subscribe((data) => {
      token = data.token;
      localStorage.setItem('token', data.token);
    })


    const httpOptions = {
      headers: new HttpHeaders({
        'Token': localStorage.getItem('token')
      })
    };
    const formData = new FormData();
    formData.append('position_id', formValue.position_id);
    formData.append('name', formValue.name);
    formData.append('email', formValue.email);
    formData.append('phone', formValue.phone);
    formData.append('photo', formValue.photo);
    return this.http.post('https://frontend-test-assignment-api.abz.agency/api/v1/users', formData, { headers: new HttpHeaders({
        'Token': localStorage.getItem('token')
      })});

  }
}
