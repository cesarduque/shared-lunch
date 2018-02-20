import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser, User } from './user.interface';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {
	constructor(private http: HttpClient) {}

	getAll(): Observable<IUser[]> {
		return this.http.get<IUser[]>('api/users');
	}

	getById(id: number): Observable<IUser> {
		return this.http.get<IUser>('api/users/' + id);
	}

	create(user: User): Observable<IUser> {
		return this.http.post<User>('api/users', user);
	}

	update(user: User): Observable<IUser> {
		return this.http.put<User>('api/users/' + user.id, user);
	}
}
