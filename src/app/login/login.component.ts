import { UserService } from './../user.service';
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
	private _users: IUser[];
	private _currentUser: IUser;
	loginForm = new FormGroup({
		email: new FormControl(),
		password: new FormControl()
	});

	constructor(
		private route: Router,
		private authenticationService: AuthenticationService,
		private userService: UserService
	) {}

	get users(): IUser[] {
		return this._users;
	}

	set users(users: IUser[]) {
		this._users = users;
	}

	get currentUser(): IUser {
		return this._currentUser;
	}

	set currentUser(users: IUser) {
		this._currentUser = users;
	}

	ngOnInit() {}

	login() {
		this.authenticationService.authenticateCurrentUser().subscribe((users: IUser[]) => {
			this.users = users;
			this.currentUser = this.users.find(
				(user) =>
					user.email === this.loginForm.get('email').value &&
					user.password === this.loginForm.get('password').value
			);
			if (this.currentUser !== null) {
				localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
				if (this.currentUser.currentMatch !== null) {
					this.userService.getById(this.currentUser.currentMatch).subscribe((user) => {
						localStorage.setItem('matchUser', JSON.stringify(user));
						this.route.navigate([ '/match/' ]);
					});
				} else {
					this.route.navigate([ '/home/' ]);
				}
			}
		});
	}
}
