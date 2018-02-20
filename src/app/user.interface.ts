export interface IUser {
	id: number;
	available: boolean;
	firstName: string;
	lastName: string;
	email: string;
	password: string;
	area: string;
	phone: string;
	interests: string[];
	description: string;
	location: number;
	currentMatch: number;
	matches: Match[];
}

export interface Match {
	id: number;
	date: string;
	rate: number;
	cancelMessage: string;
	cancelMessageToHHRR: string;
}

export class User implements IUser {
	id: number;
	available: boolean;
	firstName: string;
	lastName: string;
	email: string;
	password: string;
	area: string;
	phone: string;
	interests: string[];
	description: string;
	location: number;
	currentMatch: number;
	matches: Match[];

	constructor(
		available: boolean,
		firstName: string,
		lastName: string,
		email: string,
		password: string,
		area: string,
		phone: string,
		interests: string[],
		description: string,
		location: number,
		currentMatch: number,
		matches: Match[]
	) {
		this.available = available;
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.password = password;
		this.area = area;
		this.phone = phone;
		this.interests = interests;
		this.description = description;
		this.location = location;
		this.currentMatch = currentMatch;
		this.matches = matches;
	}
}
