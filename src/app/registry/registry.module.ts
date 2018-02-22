import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistryRoutingModule } from './registry-routing.module';
import { RegistryComponent } from './registry/registry.component';

@NgModule({
	imports: [ CommonModule, RegistryRoutingModule, SharedModule ],
	declarations: [ RegistryComponent ]
})
export class RegistryModule {}
