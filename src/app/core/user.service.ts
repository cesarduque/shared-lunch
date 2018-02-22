import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { IUser } from '../user.interface';

@Injectable()
export class UserService {
	constructor(private http: HttpClient) {}

	getAll(): Observable<IUser[]> {
		return this.http.get<IUser[]>('api/users');
	}

	getById(id: number): Observable<IUser> {
		return this.http.get<IUser>('api/users/' + id);
	}

	create(user: IUser): Observable<IUser> {
		return this.http.post<IUser>('api/users', user);
	}

	update(user: IUser): Observable<IUser> {
		return this.http.put<IUser>('api/users/' + user.id, user);
	}
}
