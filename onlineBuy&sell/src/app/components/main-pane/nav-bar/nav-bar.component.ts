import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  islogedin:boolean= true
  constructor(private router:Router) { }
  isadmin = true
  ngOnInit() {
    if(localStorage.user != 'admin'){
      this.isadmin= false
    }
    

  }
  profileUser(){
    this.router.navigate(['profile-user'])
  }
  allUsers(){
    this.router.navigate(['all-users'])
  }
  addCategorys(){
    this.router.navigate(['category'])
  }
  aboutUs(){
    this.router.navigate(['about-us'])
  }
  contactUs(){
    this.router.navigate(['contact-us'])
  }
  

}
