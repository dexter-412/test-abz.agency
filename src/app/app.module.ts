import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgxMaskModule} from 'ngx-mask';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { TopBannerComponent } from './main-page/top-banner/top-banner.component';
import { AboutMeComponent } from './main-page/about-me/about-me.component';
import { RelationshipsComponent } from './main-page/relationships/relationships.component';
import { RequirementsComponent } from './main-page/requirements/requirements.component';
import { OurUsersComponent } from './main-page/our-users/our-users.component';
import { RegisterComponent } from './main-page/register/register.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ReactiveFormsModule} from "@angular/forms";
import { MAT_DIALOG_DEFAULT_OPTIONS, MatButtonModule, MatCheckboxModule, MatDialogModule, MatSelectModule, MatSidenavModule} from "@angular/material";
import { FooterComponent } from './layout/footer/footer.component';
import { SuccessRegisterComponent } from './main-page/register/success-register/success-register.component';
import {AppRoutingModule} from "./routing.module";







@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopBannerComponent,
    AboutMeComponent,
    RelationshipsComponent,
    RequirementsComponent,
    OurUsersComponent,
    RegisterComponent,
    FooterComponent,
    SuccessRegisterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxMaskModule.forRoot(),
    ReactiveFormsModule,
    MatSelectModule,
    MatDialogModule,
    MatButtonModule,
    AppRoutingModule,
    MatSidenavModule,
    MatCheckboxModule
  ],
  bootstrap: [AppComponent],
  providers: [OurUsersComponent, {
    provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: true}
  }],
  entryComponents: [SuccessRegisterComponent]
})


export class AppModule { }
