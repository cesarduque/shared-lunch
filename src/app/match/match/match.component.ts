import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { IUser } from '../../user.interface';
import { UserService } from '../../core/user.service';

@Component({
	selector: 'app-match',
	templateUrl: './match.component.html',
	styleUrls: [ './match.component.css' ]
})
export class MatchComponent implements OnInit {
	private _currentUser: IUser;
	private _matchUser = {
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

	public get matchUser(): IUser {
		return this._matchUser;
	}

	public set matchUser(matchUser: IUser) {
		this._matchUser = matchUser;
	}
	constructor(private route: Router, private userService: UserService) {}

	ngOnInit() {
		this.matchUser = JSON.parse(localStorage.getItem('matchUser'));
	}

	rate() {
		this.route.navigate([ '/rate' ]);
	}

	cancelLunch() {
		this.route.navigate([ '/cancelLunch' ]);
	}
}
