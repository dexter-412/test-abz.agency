import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutMeComponent} from "./main-page/about-me/about-me.component";
import {RelationshipsComponent} from "./main-page/relationships/relationships.component";
import {RequirementsComponent} from "./main-page/requirements/requirements.component";
import {OurUsersComponent} from "./main-page/our-users/our-users.component";
import {RegisterComponent} from "./main-page/register/register.component";


const routes: Routes = [
  {path: 'about-me', component: AboutMeComponent},
  {path: 'relationships', component: RelationshipsComponent},
  {path: 'requirements', component: RequirementsComponent},
  {path: 'users', component: OurUsersComponent},
  {path: 'sign-up', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
    scrollOffset: [0, 64]
  }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
