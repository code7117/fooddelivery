import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductpageComponent } from './productpage/productpage.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CartComponent } from './cart/cart.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'productpage/:name',component:ProductpageComponent},
  {path:'product-detail/:name/:id',component:ProductDetailComponent},
{path:'cart',component:CartComponent},
{path:'menu',component:MenuComponent},
{path:"footer",component:FooterComponent},
{ path: 'login', component: LoginComponent },
{ path: 'dashboard', component: DashboardComponent, },
{ path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
