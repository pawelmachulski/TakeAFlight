import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import {AuthService} from '../../../services/auth.service'
import { RoutesService } from "../../../services/routes-service";
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private routesService: RoutesService, private router: Router) { }

  isLoggedIn = this.authService.isLoggedIn;
  loginSuccess = true;

  ngOnInit(): void {
  }

  onSubmit(f: NgForm){
    this.authService.login(f.value);
    this.isLoggedIn = this.authService.isLoggedIn;
    if (this.isLoggedIn){
      this.router.navigateByUrl('/search')
    }
    else{
      this.loginSuccess = false;
    }
  }

  clear(){
    this.loginSuccess = true;
  }

}
