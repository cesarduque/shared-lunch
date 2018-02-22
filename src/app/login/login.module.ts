import { SharedModule } from './../shared/shared.module';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';

@NgModule({
	imports: [ CommonModule, LoginRoutingModule, SharedModule ],
	declarations: [ LoginComponent ]
})
export class LoginModule {}
