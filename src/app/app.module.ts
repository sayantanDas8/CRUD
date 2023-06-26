import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewComponent } from './Component/view/view.component';
import { AddComponent } from './Component/add/add.component';
import { EditComponent } from './Component/edit/edit.component';
import { DetailsComponent } from './Component/details/details.component';
import { ItemService } from './Service/item.service';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './Component/home/home.component';
import { RegistrationComponent } from './Auth/registration/registration.component';
import { LoginComponent } from './Auth/login/login.component';
import { ProfileComponent } from './Auth/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewComponent,
    AddComponent,
    EditComponent,
    DetailsComponent,
    HomeComponent,
    RegistrationComponent,
    LoginComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
