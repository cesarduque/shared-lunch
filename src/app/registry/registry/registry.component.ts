import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, AbstractControl } from '@angular/forms';
import { IUser } from '../../user.interface';
import { UserService } from '../../core/user.service';

@Component({
	selector: 'app-registry',
	templateUrl: './registry.component.html',
	styleUrls: [ './registry.component.css' ]
})
export class RegistryComponent implements OnInit {
	private _user: IUser;
	private _interest: string[] = [];
	private _location = 0;
	registryForm = new FormGroup({
		firstName: new FormControl(),
		lastName: new FormControl(),
		email: new FormControl(),
		passwordGroup: new FormGroup(
			{
				password: new FormControl(),
				comfirmPassword: new FormControl()
			},
			this.validatePassword
		),
		area: new FormControl(),
		phone: new FormControl(),
		interests: new FormControl(),
		description: new FormControl(),
		vegetables: new FormControl(),
		movies: new FormControl(),
		music: new FormControl(),
		sports: new FormControl(),
		food: new FormControl(),
		coffee: new FormControl()
	});

	public get user(): IUser {
		return this._user;
	}

	public set user(user: IUser) {
		this._user = user;
	}

	public get interest(): string[] {
		return this._interest;
	}

	public set interest(interest: string[]) {
		this._interest = interest;
	}

	public set location(location: number) {
		this._location = location;
	}

	constructor(private route: Router, private userService: UserService) {}

	ngOnInit() {}

	goBack() {
		this.route.navigate([ '/login' ]);
	}

	register() {
		if (this.registryForm.get('vegetables').value) {
			this.interest.push('vegetables');
		}

		if (this.registryForm.get('movies').value) {
			this.interest.push('movies');
		}

		if (this.registryForm.get('music').value) {
			this.interest.push('music');
		}

		if (this.registryForm.get('sports').value) {
			this.interest.push('sports');
		}

		if (this.registryForm.get('food').value) {
			this.interest.push('food');
		}

		if (this.registryForm.get('coffee').value) {
			this.interest.push('coffee');
		}
		console.log(this.interest);

		this.userService
			.create({
				id: 0,
				available: true,
				firstName: this.registryForm.get('firstName').value,
				lastName: this.registryForm.get('lastName').value,
				email: this.registryForm.get('email').value,
				password: this.registryForm.get('passwordGroup').get('password').value,
				area: this.registryForm.get('area').value,
				phone: this.registryForm.get('phone').value,
				interests: this.interest,
				description: this.registryForm.get('description').value,
				location: this.location,
				currentMatch: null,
				matches: []
			})
			.subscribe((data) => {
				let usersPrueba = {};
				this.userService.getAll().subscribe((users: IUser[]) => {
					usersPrueba = users;
					console.log(usersPrueba);
				});
				this.route.navigate([ '/home' ]);
			});
	}

	validatePassword(control: AbstractControl) {
		const password = control.get('password');
		const comfirmPassword = control.get('comfirmPassword');
		if (password.value === comfirmPassword.value) {
			control.setErrors(null);
		} else {
			return { validPassword: true };
		}
	}
}
