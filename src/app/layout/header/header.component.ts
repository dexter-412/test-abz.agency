import { Component, OnInit } from '@angular/core';
import {HeaderService} from './header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  user: any;

  constructor(private headerService: HeaderService) { }

  ngOnInit() {
    this.getUser();
  }

  getUser(): void {
    this.headerService.getUser().subscribe( (data: any) => {
      console.log(data.user)

      this.user = data['user'];
      console.log(this.user)
    });
  }

}
