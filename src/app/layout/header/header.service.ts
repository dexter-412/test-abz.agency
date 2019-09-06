import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  private url: string = 'https://frontend-test-assignment-api.abz.agency/api/v1/users/1';

  constructor(private http: HttpClient) { }


  getUser (): any {
    return this.http.get(`${this.url}`);
  }
}
