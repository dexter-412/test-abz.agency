import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Subject} from 'rxjs';





@Injectable({
  providedIn: 'root'
})
export class OurUserService   {
  private url: string = 'https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=';
  usersToShow = new Subject();

  constructor(private http: HttpClient) { }

  getUsers(): void {
    this.http.get(`${this.url}${window.innerWidth <= 320 ? 3 : 6}`).subscribe((response: any) =>
      this.usersToShow.next(response)
    );
  }


  getMoreUsers (next_url: string): any {
    console.log(next_url);
    return this.http.get(`${next_url}`);

  }

}
