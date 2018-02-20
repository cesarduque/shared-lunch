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
		description: new FormControl()
	});

	constructor(private route: Router, private userService: UserService) {}

	ngOnInit() {}

	goBack() {
		this.route.navigate([ '/' ]);
	}
	register() {
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
					[],
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
