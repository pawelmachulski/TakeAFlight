import { Injectable } from '@angular/core';
import data from '../../assets/users.json'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  users = data;

  isLoggedIn: boolean = false;

  login(loginInfo){
    if(this.users.filter((s)=>s.login == loginInfo.username && s.password == loginInfo.password).length !== 0){
      this.isLoggedIn = true;
    }
  }

  logout(){
    this.isLoggedIn = !this.isLoggedIn;
  }


}
