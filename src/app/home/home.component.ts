import { IUser } from './../user.interface';
import { UserService } from './../user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: [ './home.component.css' ]
})
export class HomeComponent implements OnInit {
	users: IUser[];
	currentUser: IUser;
	available: boolean;

	constructor(
		private route: Router,
		private userService: UserService,
		private activateRoute: ActivatedRoute
	) {}

	ngOnInit() {
		this.userService.getById(this.activateRoute.snapshot.params['id']).subscribe((user) => {
			this.currentUser = user;
			this.available = this.currentUser.available;
			console.log(this.currentUser);
		});
	}

	changeStatus() {
		this.available = !this.currentUser.available;
		this.currentUser.available = !this.currentUser.available;
		this.userService.update(this.currentUser);
	}

	match(id: number) {
		this.userService.getAll().subscribe((users: IUser[]) => {
			this.users = users.filter(
				(user) => user.id !== id && user.available === true && user.currentMatch === null
			);
			const random = Math.floor(Math.random() * this.users.length + 1);
			const userRandom = this.users.find((user) => user.id === random);

			console.log(userRandom);
			console.log(this.currentUser);
			this.currentUser.currentMatch = userRandom.id;
			userRandom.currentMatch = this.currentUser.id;

			this.userService.update(this.currentUser).subscribe((data: IUser) => {
				console.log(data);
				this.userService.update(userRandom).subscribe();
			});

			this.route.navigate([ '/match' ]);
		});
	}
}
