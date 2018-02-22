import { RegistryModule } from './registry/registry.module';
import { LoginModule } from './login/login.module';
import { SharedModule } from './shared/shared.module';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { MemoryUserService } from './memory-user.service';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MenuComponent } from './menu/menu.component';
import { MatchModule } from './match/match.module';
import { CoreModule } from './core/core.module';

@NgModule({
	declarations: [ AppComponent, MenuComponent ],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		HttpClientInMemoryWebApiModule.forRoot(MemoryUserService),
		SharedModule,
		MatchModule,
		LoginModule,
		RegistryModule,
		CoreModule
	],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
