import { CategoryService } from './../sevices/category.service';
import { Category } from './../models/category';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../sevices/user.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { User } from '../models/user';

@Component({
  selector: 'app-allcategorys',
  templateUrl: './allcategorys.component.html',
  styleUrls: ['./allcategorys.component.css']
})
export class AllcategorysComponent implements OnInit {
  islogedin:boolean= true
 
  isadmin = true
  categorys:Category[]=[]
  constructor(private categoryService:CategoryService, public dialog:MatDialog,private toastr: ToastrService,private router:Router,private userService:UserService,) { }
  displayedColumns: string[] = ['CategoryName', 'Code','action'];
  dataSource = new MatTableDataSource(this.categorys);

  
obj={
  username:''
}


  user= {} as User
  ngOnInit() {
    this.obj.username=localStorage.userId
    this.userService.getUserbyUsername(this.obj).subscribe((res:any)=>{
     this.user=res.result[0]
      console.log(this.user)
    })
  




    if(localStorage.user != 'admin'){
      this.isadmin= false
    }
    this.categoryService.getCategorys().subscribe((res:any)=>{

      this.categorys=res.result
      this.dataSource.data=this.categorys
      console.log(res.result)
    })
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  upatebook(book){
    const ref = this.dialog.open(AllcategorysComponent,{width:'500px',data:book})
  }

  removeCategory(Category){
    if(confirm('Are You sure to remove this Book?')){
      this.categoryService.deleteCategory(Category).subscribe((res:any)=>{
        if(res.code==1){
          this.toastr.error("Deletion Failed")
        }
        else{
          this.toastr.success("Deletion Successfull")
          this.categorys.splice(this.categorys.indexOf(Category) , 1)
          this.dataSource._updateChangeSubscription()
        }
        
          console.log(res.result)
        })
      }
    
  }
  
  refresh(){
    this.ngOnInit();
    this.dataSource._updateChangeSubscription()
  }
}
