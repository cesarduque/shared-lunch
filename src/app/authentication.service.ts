import { Observable } from 'rxjs/Observable';
import { UserService } from './user.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from './user.interface';

@Injectable()
export class AuthenticationService {
	constructor(private userService: UserService) {}

	authenticateCurrentUser(): Observable<IUser[]> {
		return this.userService.getAll();
	}
}
