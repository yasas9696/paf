import { Component, OnInit, Inject } from '@angular/core';
import { Category } from '../models/category';
import { Router } from '@angular/router';
import { CategoryService } from '../sevices/category.service';
import { ToastrService } from 'ngx-toastr';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.css']
})
export class UpdateCategoryComponent implements OnInit {
  category:Category={
    cname:'',
   
    ccode:'',
    
  }

  constructor(private router:Router , private categoryService:CategoryService,private toastr: ToastrService ,public dialogref:MatDialogRef<UpdateCategoryComponent>, @Inject(MAT_DIALOG_DATA) private data:Category) { }

  ngOnInit() {
    this.category=this.data
  }
  
  update(){
    this.categoryService.updateCategory(this.category).subscribe((res:any)=>{
      if(res.code==1){
        this.toastr.error("update failed")
      }
      else{
        this.toastr.success("update successfuly")
        this.dialogref.close()
      }
     })
  }

  cancel(){
    this.dialogref.close()
  }


}
