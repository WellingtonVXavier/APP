import { UserModel } from 'src/app/pages/user/models/user.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl: string = "https://jsonplaceholder.typicode.com/";
  constructor(private http: HttpClient) {}

  //users/1
    getById(id: number): Observable<UserModel>{
      return this.http.get<UserModel>(`${this.baseUrl}/users/${id}`);
  }

  //users
    getAll(): Observable<UserModel[]>{
      return this.http.get<UserModel[]>(`${this.baseUrl}/users`);
  }

  //post > /users
    addUser(newUser: UserModel): Observable<UserModel>{
      return this.http.post<UserModel>(`${this.baseUrl}/users`,newUser );
  }

    //post > /users
    deleteUser(id: number): Observable<any>{
      return this.http.delete<UserModel>(`${this.baseUrl}/users${id}`);
  }

      //put > /users
      updateUser(id: number, newUser: UserModel): Observable<UserModel>{
        return this.http.put<UserModel>(`${this.baseUrl}/users${id}`, newUser);
    }
}
