import { UserService } from './../../core/user.service';
import { IUser } from './../../user.interface';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-cancel-lunch',
	templateUrl: './cancel-lunch.component.html',
	styleUrls: [ './cancel-lunch.component.css' ]
})
export class CancelLunchComponent implements OnInit {
	private _currentUser: IUser;
	private _matchUser: IUser;
	private _messageMatch = '';
	private _messageHr = '';

	public get currentUser(): IUser {
		return this._currentUser;
	}

	public set currentUser(users: IUser) {
		this._currentUser = users;
	}

	public get matchUser(): IUser {
		return this._matchUser;
	}

	public set matchUser(matchUser: IUser) {
		this._matchUser = matchUser;
	}

	public get messageMatch(): string {
		return this._messageMatch;
	}

	public set messageMatch(messageMatch: string) {
		this._messageMatch = messageMatch;
	}

	public get messageHr(): string {
		return this._messageHr;
	}

	public set messageHr(messageHr: string) {
		this._messageHr = messageHr;
	}

	constructor(private route: Router, private userService: UserService) {}

	ngOnInit() {
		this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
		this.matchUser = JSON.parse(localStorage.getItem('matchUser'));
	}

	goBack() {
		this.route.navigate([ '/match' ]);
	}

	save() {
		this.userService.getById(this.currentUser.id).subscribe((user: IUser) => {
			user.currentMatch = null;
			user.matches.push({
				id: this.matchUser.id,
				date: new Date().getDate().toString(),
				rate: null,
				cancelMessage: this.messageMatch,
				cancelMessageToHHRR: this.messageHr
			});

			this.userService.update(user).subscribe((data) => {
				console.log(data);

				this.userService.getById(this.currentUser.id).subscribe((data1: IUser) => {
					console.log('matches current');
					console.log(data1.matches);
				});

				this.userService.getById(this.matchUser.id).subscribe((userMatch: IUser) => {
					userMatch.currentMatch = null;
					this.userService.update(userMatch).subscribe((data2: IUser) => {
						this.userService.getById(this.matchUser.id).subscribe((data2: IUser) => {
							console.log('matches 2');
							console.log(data2.matches);
						});
					});
				});

				localStorage.setItem('currentUser', JSON.stringify(user));
				localStorage.setItem('matchUser', JSON.stringify(null));
				this.route.navigate([ '/home/' ]);
			});
		});
	}
}
