import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-match',
	templateUrl: './match.component.html',
	styleUrls: [ './match.component.css' ]
})
export class MatchComponent implements OnInit {
	constructor(private route: Router) {}

	ngOnInit() {}

	rate() {
		this.route.navigate([ '/rate' ]);
	}

	cancelLunch() {}
}
