import { AuthGuard } from './auth.guard';



import { UserProfileComponent } from './components/main-pane/user-profile/user-profile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainPaneComponent } from './components/main-pane/main-pane.component';
import { NewArrivalComponent } from './components/new-arrival/new-arrival.component';
import { FooterComponent } from './components/footer/footer.component';
import {MatCardModule,MatInputModule,MatFormFieldModule,MatIconModule,MatButtonModule, MatTableModule,MatSelectModule, MatDatepickerModule, MatNativeDateModule, MatAutocompleteModule, MatDividerModule, MatProgressSpinnerModule,MatDialogModule,MAT_DIALOG_DATA,MatDialogRef} from '@angular/material';
import { UserRegisterComponent } from './components/main-pane/user-register/user-register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserLoginComponent } from './components/main-pane/user-login/user-login.component';
import { SlideShowComponent } from './components/main-pane/slide-show/slide-show.component';
import {SlideshowModule} from 'ng-simple-slideshow';
import { NewArrivalBookComponent } from './components/new-arrival/new-arrival-book/new-arrival-book.component';
import { NavBarComponent } from './components/main-pane/nav-bar/nav-bar.component';




import { SlShowComponent } from './components/main-pane/sl-show/sl-show.component';
import { SearchBarComponent } from './components/header/search-bar/search-bar.component';


import { ContactUsComponent } from './components/main-pane/contact-us/contact-us.component';
import {  HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UsertableComponent } from './components/main-pane/usertable/usertable.component';
import { ToastrModule } from 'ngx-toastr';

import { LoginLayoutComponent } from './components/login-layout/login-layout.component';
import { HomeLayoutComponent } from './components/home-layout/home-layout.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';


import { AllUsersComponent } from './components/main-pane/all-users/all-users.component';
import { CategoryComponent } from './category/category.component';
import { AllcategorysComponent } from './allcategorys/allcategorys.component';
import { UpdateCategoryComponent } from './update-category/update-category.component';







@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainPaneComponent,
    NewArrivalComponent,
    FooterComponent,
    UserRegisterComponent,
    UserLoginComponent,
    SlideShowComponent,
    NewArrivalBookComponent,
    NavBarComponent,
    UserProfileComponent,
    
    UserProfileComponent,
   
    SlShowComponent,
   
    SearchBarComponent,
    
    ContactUsComponent,
  
    UsertableComponent,
    AllUsersComponent,
 
    LoginLayoutComponent,
    HomeLayoutComponent,
    LoginComponent,
    RegisterComponent,
    CategoryComponent,
    AllcategorysComponent,
    UpdateCategoryComponent,

  

   

    
 
  ],

  

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    MatTableModule,ReactiveFormsModule,
    SlideshowModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatAutocompleteModule,
    MatTableModule,  
    MatDividerModule,
    MatProgressSpinnerModule,

    SlideshowModule,  

    SlideshowModule,
    MatDatepickerModule,

    MatNativeDateModule,
    HttpClientModule,
ToastrModule.forRoot(),
    MatNativeDateModule
  ],

  entryComponents:[SlideShowComponent,],
  exports:[SlideShowComponent],
  providers: [SlideShowComponent,NavBarComponent,AuthGuard, ],
  bootstrap: [AppComponent]
})
export class AppModule { }
