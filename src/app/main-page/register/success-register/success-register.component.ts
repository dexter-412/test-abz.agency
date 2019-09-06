import {Component, Inject, OnInit, Optional} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";


@Component({
  selector: 'app-success-register',
  templateUrl: './success-register.component.html',
  styleUrls: ['./success-register.component.scss']
})
export class SuccessRegisterComponent implements OnInit {

  constructor(private matDialogRef: MatDialogRef<SuccessRegisterComponent>, @Optional() @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

}
