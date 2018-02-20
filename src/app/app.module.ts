import { AuthenticationService } from './authentication.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatCheckboxModule, MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { MemoryUserService } from './memory-user.service';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegistryComponent } from './registry/registry.component';
import { AppRoutingModule } from './app-routing.module';
import { MatchComponent } from './match/match.component';
import { RateComponent } from './rate/rate.component';
import { MenuComponent } from './menu/menu.component';
import { AvatarComponent } from './avatar/avatar.component';
import { UserService } from './user.service';
import { FormsModule } from '@angular/forms';

@NgModule({
	declarations: [
		AppComponent,
		LoginComponent,
		HomeComponent,
		RegistryComponent,
		MatchComponent,
		RateComponent,
		MenuComponent,
		AvatarComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		MatButtonModule,
		MatCheckboxModule,
		MatFormFieldModule,
		MatSelectModule,
		MatInputModule,
		AppRoutingModule,
		MatMenuModule,
		HttpClientModule,
		HttpClientInMemoryWebApiModule.forRoot(MemoryUserService),
		ReactiveFormsModule,
		FormsModule
	],
	providers: [ AuthenticationService, UserService ],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
