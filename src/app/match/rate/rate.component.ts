import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from '../../user.interface';
import { UserService } from '../../core/user.service';

@Component({
	selector: 'app-rate',
	templateUrl: './rate.component.html',
	styleUrls: [ './rate.component.css' ]
})
export class RateComponent implements OnInit {
	private _matchUser: IUser;
	private _currentUser: IUser;
	private _selected = 1;

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

	public get selected(): number {
		return this._selected;
	}

	public set selected(select: number) {
		this._selected = select;
	}

	constructor(private userServie: UserService, private route: Router) {}

	ngOnInit() {
		this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
		this.matchUser = JSON.parse(localStorage.getItem('matchUser'));
	}

	goBack() {
		this.route.navigate([ '/match' ]);
	}

	ok() {
		this.userServie.getById(this.currentUser.id).subscribe((user: IUser) => {
			user.currentMatch = null;
			user.matches.push({
				id: this.matchUser.id,
				date: new Date().getDate().toString(),
				rate: this.selected,
				cancelMessage: '',
				cancelMessageToHHRR: ''
			});

			this.userServie.update(user).subscribe((data) => {
				console.log(data);

				this.userServie.getById(this.currentUser.id).subscribe((data1: IUser) => {
					console.log('matches current');
					console.log(data1.matches);
				});

				this.userServie.getById(this.matchUser.id).subscribe((userMatch: IUser) => {
					userMatch.currentMatch = null;
					this.userServie.update(userMatch).subscribe((data2: IUser) => {
						this.userServie.getById(this.matchUser.id).subscribe((data2: IUser) => {
							console.log('matches 2');
							console.log(data2.matches);
						});
					});
				});

				localStorage.setItem('currentUser', JSON.stringify(user));
				localStorage.setItem('matchUser', JSON.stringify(null));
				this.route.navigate([ '/home' ]);
			});
		});
	}
}
