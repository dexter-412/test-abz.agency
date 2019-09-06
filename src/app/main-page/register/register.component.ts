import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { checkEmail, checkphone } from '../../core/_custom_validators/validators';

import {RegisterService} from './register.service';
import {OurUserService} from '../our-users/our-user-service';
import {MatDialog} from "@angular/material";
import {SuccessRegisterComponent} from "./success-register/success-register.component";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  positions: any;

  registrForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, checkEmail]),
    phone: new FormControl('', [Validators.required, checkphone]),
    position_id : new FormControl('', Validators.required),
    photo: new FormControl('', [Validators.required])
  })

  constructor( private registerService: RegisterService, private servise: OurUserService, public dialog: MatDialog) { }

  ngOnInit() {
    this.getPositions();
  }

  onSubmit(): void {

    // Treatment string phone
     this.registrForm.value.phone = '+38'.concat(this.registrForm.value.phone);
    this.registrForm.value.phone = this.registrForm.value.phone.replace( /\s/g, '');
    this.registrForm.value.phone = this.registrForm.value.phone.replace( ')', '');


    // Get image data for submit
    const fileVal: any = document.getElementById('filePhoto');
    const img = new Image();
    img.src = window.URL.createObjectURL(fileVal.files[0]);
    img.onload = function() {
      const width = img.naturalWidth;
      const height = img.naturalHeight;
    };
    this.registrForm.value.photo = this.processingPhoto();


    this.registerService.postUser(this.registrForm.value).subscribe(() => {
      this.dialog.open(SuccessRegisterComponent , {width: '310px'});

      setTimeout(() => {this.servise.getUsers();
        //this.comp.test();
        }
        , 2000);
    });
  }

  processingPhoto() {
    const fileVal: any = document.getElementById('filePhoto');
    const img = new Image();
    img.src = window.URL.createObjectURL(fileVal.files[0]);
    img.onload = function () {
      const width = img.naturalWidth;
      const height = img.naturalHeight;
    }
    return fileVal.files[0];
  }

  // get work position for select
  getPositions(): void {
    this.registerService.getPositions().subscribe((response: any) => {
      this.positions = response.positions;
    });
  }

}
