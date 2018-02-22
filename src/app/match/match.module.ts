import { SharedModule } from './../shared/shared.module';
import { RateComponent } from '././rate/rate.component';
import { MatchComponent } from './match/match.component';
import { HomeComponent } from '././home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatchRoutingModule } from './match-routing.module';
import { CancelLunchComponent } from './cancel-lunch/cancel-lunch.component';

@NgModule({
	imports: [ CommonModule, MatchRoutingModule, SharedModule ],
	declarations: [ HomeComponent, MatchComponent, RateComponent, CancelLunchComponent ]
})
export class MatchModule {}
