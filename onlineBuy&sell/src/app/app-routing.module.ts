import { CategoryComponent } from './category/category.component';
import { AllcategorysComponent } from './allcategorys/allcategorys.component';
import { AllUsersComponent } from './components/main-pane/all-users/all-users.component';

import { ContactUsComponent } from './components/main-pane/contact-us/contact-us.component';

import { SlideshowModule } from 'ng-simple-slideshow';

import { UserProfileComponent } from './components/main-pane/user-profile/user-profile.component';
import { UserLoginComponent } from './components/main-pane/user-login/user-login.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserRegisterComponent } from './components/main-pane/user-register/user-register.component';

import { SlideShowComponent } from './components/main-pane/slide-show/slide-show.component';
import { HomeLayoutComponent } from './components/home-layout/home-layout.component';
import { AuthGuard } from './auth.guard';

import { NavBarComponent } from './components/main-pane/nav-bar/nav-bar.component';
import { SlShowComponent } from './components/main-pane/sl-show/sl-show.component';
import { UsertableComponent } from './components/main-pane/usertable/usertable.component';
import { NewArrivalComponent } from './components/new-arrival/new-arrival.component';
import { NewArrivalBookComponent } from './components/new-arrival/new-arrival-book/new-arrival-book.component';
import { LoginLayoutComponent } from './components/login-layout/login-layout.component';
import { LoginComponent } from './components/login/login.component';


const routes: Routes = [
  {
    path: '',
    component: HomeLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'slideshow',
        component: SlideShowComponent,
      },
      {
        path: '',
        redirectTo: '/slideshow',
        pathMatch: 'full'
      },
      
      {
        path: '',
        redirectTo: '/add-book',
        pathMatch: 'full'
      },
      {
        path: '',
        redirectTo: '/category',
        pathMatch: 'full'
      },
     


      {
        path: 'category',
        component: CategoryComponent,
      },
      {
        path: '',
        redirectTo: '/category',
        pathMatch: 'full'
      },


     
      {
        path: '',
        redirectTo: '/add-author',
        pathMatch: 'full'
      },
     
      {
        path: '',
        redirectTo: '/all-books',
        pathMatch: 'full'
      },

      {
        path: 'all-users',
        component: AllUsersComponent,
      },
      {
        path: '',
        redirectTo: '/all-users',
        pathMatch: 'full'
      },
      {
        path: 'all-categorys',
        component: AllcategorysComponent,
      },
      {
        path: '',
        redirectTo: '/all-categorys',
        pathMatch: 'full'
      },


      
       
      {
        path: '',
        redirectTo: '/borrow-book',
        pathMatch: 'full'
      },


      
      {
        path: '',
        redirectTo: '/cal-fines',
        pathMatch: 'full'
      },
      {
        path: 'contact-us',
        component: ContactUsComponent,
      },
      {
        path: '',
        redirectTo: '/contact-us',
        pathMatch: 'full'
      },

      
      {
        path: '',
        redirectTo: '/about-us',
        pathMatch: 'full'
      },


      {
        path: 'nav-bar',
        component: NavBarComponent,
      },
      {
        path: '',
        redirectTo: '/nav-bar',
        pathMatch: 'full'
      },

      
      
       
     
      {
        path: 'profile-user',
        component: UserProfileComponent,
      },
      {
        path: '',
        redirectTo: '/profile-user',
        pathMatch: 'full'
      },
      // {
      //   path: 'userregister',
      //   component: UserRegisterComponent,
      // },
      // {
      //   path: '',
      //   redirectTo: '/userregister',
      //   pathMatch: 'full'
      // },
       {
        path : 'user-table',
        component : UsertableComponent
      },
      {
        path: '',
        redirectTo: '/user-table',
        pathMatch: 'full'
      },
      {
        path : 'new-arrival',
        component : NewArrivalComponent
      },
      {
        path: '',
        redirectTo: '/new-arrival',
        pathMatch: 'full'
      },
      {
        path : 'newarrivalbook',
        component : NewArrivalBookComponent
      },
      {
        path: '',
        redirectTo: '/newarrivalbook',
        pathMatch: 'full'
      },
    ]
  },
  {
    path: '',
    component: LoginLayoutComponent,
    children: [
      {
        path: 'auth',
        component: UserLoginComponent,
      },
      {
        path: '',
        redirectTo: 'auth',
        pathMatch: 'full'
      },
      {
        path : 'userregister',
        component : UserRegisterComponent,
      },
      {
        path: '',
        redirectTo: 'userregister',
        pathMatch: 'full'
      },
    ]
  },


// const routes: Routes = [

//    {
//     path:'',
//      component:SlideShowComponent
//    },
//    {
//      path:'register-user',
//      component:UserRegisterComponent
//    },
//    {
//     path : 'usertable',
//     component : UsertableComponent
//   },
//    {
//      path:'login-user',
//      component:UserLoginComponent
//    },

//    {
//      path:'profile-user',
//      component:UserProfileComponent
//    },
//    {
//      path:'add-author',
//      component:AddAuthorComponent
//     },
//     {
//       path:'add-book',
//       component:AddBookComponent
//     },
//     {
//       path:'cal-fines',
//       component:CalfinesComponent
//     },
//     {
//       path:'borrow-book',
//       component:BorrowBookComponent
//     },
//     {
//       path:'contact-us',
//       component:ContactUsComponent
//     },
//     {
//       path:'about-us',
//       component:AboutUsComponent
//     }

   


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
  
}
