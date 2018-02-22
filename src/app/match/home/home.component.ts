import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { IUser } from '../../user.interface';
import { UserService } from '../../core/user.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: [ './home.component.css' ]
})
export class HomeComponent implements OnInit {
	private _users: IUser[];
	private _matchUser: IUser;
	currentUser = {
		id: 0,
		available: true,
		firstName: '',
		lastName: '',
		email: '',
		password: '',
		area: '',
		phone: '',
		interests: [],
		description: '',
		location: 1,
		currentMatch: null,
		matches: []
	};

	public get users(): IUser[] {
		return this._users;
	}

	public set users(users: IUser[]) {
		this._users = users;
	}

	public get matchUser(): IUser {
		return this._matchUser;
	}

	public set matchUser(matchUser: IUser) {
		this._matchUser = matchUser;
	}

	constructor(private route: Router, private userService: UserService) {}

	ngOnInit() {
		this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
	}

	changeStatus() {
		this.currentUser.available = !this.currentUser.available;
		this.userService.update(this.currentUser).subscribe();
	}

	match() {
		this.userService.getAll().subscribe((users: IUser[]) => {
			this.users = users.filter(
				(user) =>
					user.id !== this.currentUser.id &&
					user.available === true &&
					user.currentMatch === null
			);

			let random = Math.floor(Math.random() * this.users.length);
			let matchUser = this.users.find((user) => user.id === random);

			while (matchUser === undefined) {
				random = Math.floor(Math.random() * this.users.length);
				matchUser = this.users.find((user) => user.id === random);
			}

			console.log(matchUser);
			this.currentUser.currentMatch = matchUser.id;
			matchUser.currentMatch = this.currentUser.id;

			localStorage.setItem('matchUser', JSON.stringify(matchUser));
			localStorage.setItem('currentUser', JSON.stringify(this.currentUser));

			this.userService.update(this.currentUser).subscribe((data: IUser) => {
				console.log(data);
				this.userService.update(matchUser).subscribe();
			});

			this.route.navigate([ '/match' ]);
		});
	}
}
