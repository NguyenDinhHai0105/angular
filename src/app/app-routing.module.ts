import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { OcsComponent } from './ocs/ocs.component';

const routes: Routes = [
  {path: "", component: LoginComponent, pathMatch: "full"},
  {path: "login", component: LoginComponent},
  {path: "home", component: OcsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
