import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegistryComponent } from './registry/registry.component';
import { HomeComponent } from './home/home.component';
import { MatchComponent } from './match/match.component';
import { RateComponent } from './rate/rate.component';

const appRoutes: Routes = [
	{ path: '', component: LoginComponent },
	{ path: 'registry', component: RegistryComponent },
	{ path: 'home/:id', component: HomeComponent },
	{ path: 'match', component: MatchComponent },
	{ path: 'rate', component: RateComponent }
];

@NgModule({
	imports: [ RouterModule.forRoot(appRoutes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
