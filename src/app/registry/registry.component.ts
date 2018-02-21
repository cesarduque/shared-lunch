import { UserService } from './../user.service';
import { IUser, User } from './../user.interface';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
	selector: 'app-registry',
	templateUrl: './registry.component.html',
	styleUrls: [ './registry.component.css' ]
})
export class RegistryComponent implements OnInit {
	user: IUser;
	registryForm = new FormGroup({
		firstName: new FormControl(),
		lastName: new FormControl(),
		email: new FormControl(),
		password: new FormControl(),
		comfirmPassword: new FormControl(),
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
	interest: string[] = [];

	constructor(private route: Router, private userService: UserService) {}

	ngOnInit() {}

	goBack() {
		this.route.navigate([ '/' ]);
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
			.create(
				new User(
					true,
					this.registryForm.get('firstName').value,
					this.registryForm.get('lastName').value,
					this.registryForm.get('email').value,
					this.registryForm.get('password').value,
					this.registryForm.get('area').value,
					this.registryForm.get('phone').value,
					this.interest,
					this.registryForm.get('description').value,
					1,
					1,
					[]
				)
			)
			.subscribe((data) => {
				this.route.navigate([ '/home' ]);
			});

		let usersPrueba = {};
		this.userService.getAll().subscribe((users: IUser[]) => {
			usersPrueba = users;
			console.log(usersPrueba);
		});
	}
}
