import {HttpClientModule} from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componensts/login/login.component';
import { SignupComponent } from './componensts/signup/signup.component';
import { DashboardComponent } from './componensts/dashboard/dashboard.component';
import { AdminComponent } from './componensts/admin/admin.component';
import { UserComponent } from './componensts/user/user.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';

// import { MatchPasswordDirective } from './directives/match-password.directive';
// import { ValidateUserNameDirective } from './directives/validate-user-name.directive';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    AdminComponent,
    UserComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
