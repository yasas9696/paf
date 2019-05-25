import { User } from './../../../models/user';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/sevices/user.service';
import { ToastrService } from "ngx-toastr";

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  comfirmpassword :String=''
  

  emailex=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  user:User={
    
    fname:'',
    lname: '',
    username:'',
    password: '',
    email: '',
    address: '',
    phone: '',
    regdate:'',
    nic: '',
  }
  constructor(private router:Router , private userService:UserService, private toastr: ToastrService,) { }
  ngOnInit() {
    this.user={
    
      fname:'',
      lname: '',
      username:'',
      password: '',
      email: '',
      address: '',
      phone: '',
      regdate:'',
      nic: '',
    }
  }
  cancel(){
    this.router.navigate([''])
  }
  // 
  
  $function() {
   
    $("form[name='registration']").validate({
      
      rules: {
       
        fname: "required",
        lname: "required",
        username: "required",
        address:"required",
        phone:"required",
        nic:"required",
        email: {
          required: true,
         
          email: true
        },
        password: {
          required: true,
          minlength: 5
        }
      },
     
      messages: {
        firstname: "Please enter your firstname",
        lastname: "Please enter your lastname",
        username: "Please enter your username",
        address:"Please enter your address",
        phone:"Please enter your phone",
        nic:"Please enter your nic",
        password: {
          required: "Please provide a password",
          minlength: "Your password must be at least 5 characters long"
        },
        email: "Please enter a valid email address"
      },
     
      submitHandler: function(form) {
        form.submit();
      }
    });
  };

}


