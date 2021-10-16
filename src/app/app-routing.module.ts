import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { CartComponent } from './cart/cart.component';
import { ContentComponent } from './content/content.component';
import { OffersDetailsComponent } from './offers-details/offers-details.component';
import { TravelsComponent } from './travels/travels.component';

const routes: Routes = [{
  path:"", component: ContentComponent
},{
  path:"travels", component: TravelsComponent
},{
  path:"blog", component: BlogComponent
},{
  path:'travels/:offersID', component: OffersDetailsComponent
},{
  path:'cart', component: CartComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
