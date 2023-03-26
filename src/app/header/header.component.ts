import { Component, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  username!:string;
  logged!:boolean;

  constructor(private router: Router,private dialog:MatDialog) { }

  openDialogSesion(){
  }

  ngOnInit(): void {
    //this.loginService.getUsername.subscribe(username => this.username = username);
    //this.loginService.getLogged.subscribe(logged => this.logged = logged);
  }
  
}
