import { CancelLunchComponent } from './cancel-lunch/cancel-lunch.component';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { MatchComponent } from './match/match.component';
import { RateComponent } from './rate/rate.component';
import { Routes, RouterModule } from '@angular/router';

const matchRoutes: Routes = [
	{ path: 'home', component: HomeComponent },
	{ path: 'match', component: MatchComponent },
	{ path: 'rate', component: RateComponent },
	{ path: 'cancelLunch', component: CancelLunchComponent }
];

@NgModule({
	imports: [ RouterModule.forChild(matchRoutes) ],
	exports: [ RouterModule ]
})
export class MatchRoutingModule {}
