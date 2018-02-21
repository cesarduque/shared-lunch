import { UserService } from './../user.service';
import { IUser } from './../user.interface';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-rate',
	templateUrl: './rate.component.html',
	styleUrls: [ './rate.component.css' ]
})
export class RateComponent implements OnInit {
	matchUser: IUser;
	currentUser: IUser;
	selected: 'awesome';

	constructor(private userServie: UserService, private route: Router) {}

	ngOnInit() {
		this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
		this.matchUser = JSON.parse(localStorage.getItem('matchUser'));
	}

	ok() {
		this.userServie.getById(this.currentUser.id).subscribe((user: IUser) => {
			user.currentMatch = null;
			user.matches.push({
				id: this.matchUser.id,
				date: '02/21/2018',
				rate: 1,
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
				this.route.navigate([ '/home/' ]);
			});
		});
	}
}
