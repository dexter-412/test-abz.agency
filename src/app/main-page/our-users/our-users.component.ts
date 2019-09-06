import { Component, OnInit } from '@angular/core';
import { OurUserService } from "./our-user-service";
import { UserInterface } from "../../core/_interfaces/user-interface";

@Component({
  selector: 'app-our-users',
  templateUrl: './our-users.component.html',
  styleUrls: ['./our-users.component.scss']
})



export class OurUsersComponent implements OnInit {

  usersResponse: any;
  usersToShow: UserInterface[];
  showMoreDisabled: boolean = false;

  constructor(private ourUsersService: OurUserService) { }

  ngOnInit() {
    this.ourUsersService.getUsers();

    // reload list after register user
    this.ourUsersService.usersToShow.subscribe(value => {
      this.usersToShow = value['users'];
      this.usersResponse = value['links'].next_url;
    });
  }

  showMore(): void {
    if (this.usersResponse) {
      this.ourUsersService.getMoreUsers(this.usersResponse).subscribe((response: any) => {
        this.usersResponse = response.links.next_url;
        this.usersToShow = this.usersToShow.concat(response.users);
        if (response.count < 6) {
          this.showMoreDisabled = true;
        }
      });
    } else {
      this.showMoreDisabled = true;
    }
  }

}
