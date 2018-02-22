import { AvatarComponent } from '././avatar/avatar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatCheckboxModule, MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@NgModule({
	imports: [ CommonModule ],
	declarations: [ AvatarComponent ],
	exports: [
		AvatarComponent,
		BrowserAnimationsModule,
		MatButtonModule,
		MatCheckboxModule,
		MatFormFieldModule,
		MatSelectModule,
		MatInputModule,
		MatMenuModule,
		ReactiveFormsModule,
		FormsModule
	]
})
export class SharedModule {}
