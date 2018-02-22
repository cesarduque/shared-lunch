import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationService } from './authentication.service';
import { UserService } from './user.service';

@NgModule({
	imports: [ CommonModule ],
	declarations: [],
	providers: [ AuthenticationService, UserService ]
})
export class CoreModule {}
