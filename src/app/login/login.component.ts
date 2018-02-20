import { FormGroup, FormControl } from '@angular/forms';
import { IUser } from './../user.interface';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthenticationService } from '../authentication.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: [ './login.component.css' ]
})
export class LoginComponent implements OnInit {
	users: IUser[];
	currentUser: IUser;
	loginForm = new FormGroup({
		email: new FormControl(),
		password: new FormControl()
	});

	constructor(private route: Router, private authenticationService: AuthenticationService) {}

	ngOnInit() {}

	login() {
		this.authenticationService.authenticateCurrentUser().subscribe((users: IUser[]) => {
			this.users = users;
			this.currentUser = this.users.find(
				(user) =>
					user.email === this.loginForm.get('email').value &&
					user.password === this.loginForm.get('password').value
			);
			if (this.currentUser !== undefined) {
				this.route.navigate([ '/home/' + this.currentUser.id ]);
			}
		});
	}
}
