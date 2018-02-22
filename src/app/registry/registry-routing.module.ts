import { RegistryComponent } from './registry/registry.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const registryRoutes: Routes = [ { path: 'registry', component: RegistryComponent } ];

@NgModule({
	imports: [ RouterModule.forChild(registryRoutes) ],
	exports: [ RouterModule ]
})
export class RegistryRoutingModule {}
