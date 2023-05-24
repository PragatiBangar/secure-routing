import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RoutingComponent } from './routing/routing.component';
import { ProductComponent } from './product/product.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { JWT_OPTIONS, JwtHelperService } from '@auth0/angular-jwt';
import { AboutusComponent } from './aboutus/aboutus.component';

export const routes : Routes=[
  {path:'' ,redirectTo:'/login' ,pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'routing' ,component:RoutingComponent},
    // {path:'' ,redirectTo:'routing' ,pathMatch:'full'},
    { path:'home', component:HomeComponent },
    { path:'product', component:ProductComponent },
    { path:'aboutus', component:AboutusComponent  }
]




// export const routes:Routes=[
//   { path: '', redirectTo: '/login', pathMatch: 'full' },
//   { path: 'login', component: LoginComponent },
//   {
//     path: 'routing',
//     component: RoutingComponent,
//     children: [
//       { path: 'aboutus', component: AboutusComponent },
//       { path: 'product', component: ProductComponent },
//       { path: 'home', component: HomeComponent },
      
//     ]
//   },
// ]


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RoutingComponent,
    ProductComponent,
    AboutusComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [JwtHelperService,{ provide: JWT_OPTIONS, useValue: JWT_OPTIONS }    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
