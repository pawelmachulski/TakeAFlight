import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service'
import { faPlane } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-toolbar-component',
  templateUrl: './toolbar-component.component.html',
  styleUrls: ['./toolbar-component.component.scss']
})
export class ToolbarComponentComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  isLoggedIn = this.authService.isLoggedIn;
  planeIcon = faPlane;

  logout(){
    this.authService.logout();
    this.isLoggedIn = this.authService.isLoggedIn;
  }

  public isMenuCollapsed = true;

}
