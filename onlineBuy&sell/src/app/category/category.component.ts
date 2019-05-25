import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { CategoryService } from '../sevices/category.service';
import { Category } from '../models/category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  category:Category={
    cname:'',
    ccode:'',
    
  }

  constructor(private categoryService:CategoryService ,private toastr: ToastrService,private router:Router ) { }

  ngOnInit() {
    this.category={
      cname:'',
      ccode:'',
     
    }
   
   
  }



  cancel(){
    this.router.navigate([''])
  }
  addcategory(){
    console.log(this.category)
    if(this.category.cname==''){
      console.log('category name cannot be empty')
      this.toastr.error("category name cannot be empty")
    }
    
    else{
      this.categoryService.addCategory(this.category).subscribe((res:any)=>{
        console.log(res)
        if(res.code==0){
          this.toastr.success("category added successfuly")

          this.ngOnInit()
          
        }else {
          this.toastr.error(res.message)

        }
      }
        
        );
      
    }


    
  }
 

}
