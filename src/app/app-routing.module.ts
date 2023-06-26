import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewComponent } from './Component/view/view.component';
import { AddComponent } from './Component/add/add.component';
import { HomeComponent } from './Component/home/home.component';
import { DetailsComponent } from './Component/details/details.component';
import { EditComponent } from './Component/edit/edit.component';
import { RegistrationComponent } from './Auth/registration/registration.component';
import { LoginComponent } from './Auth/login/login.component';

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full"},
  { path: 'home', component:HomeComponent },
  { path: 'add', component: AddComponent },
  { path: 'view', component: ViewComponent },
  { path: 'view/details/:id', component: DetailsComponent},
  { path: 'edit/:id', component: EditComponent},
  { path: 'register', component: RegistrationComponent},
  { path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
