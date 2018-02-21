import { UserService } from './../user.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { IUser } from '../user.interface';

@Component({
	selector: 'app-match',
	templateUrl: './match.component.html',
	styleUrls: [ './match.component.css' ]
})
export class MatchComponent implements OnInit {
	currentUser: IUser;
	matchUser = {
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
	constructor(private route: Router, private userService: UserService) {}

	ngOnInit() {
		this.matchUser = JSON.parse(localStorage.getItem('matchUser'));
	}

	rate() {
		this.route.navigate([ '/rate' ]);
	}

	cancelLunch() {}
}
