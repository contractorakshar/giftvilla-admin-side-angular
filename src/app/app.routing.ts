import { RouterModule,Routes } from '@angular/router';
import { DisplayUserComponent } from './display-user/display-user.component';
import { ProductdisplayComponent } from './productdisplay/productdisplay.component';
import { CategorydisplayComponent } from './categorydisplay/categorydisplay.component';
import { AddproductComponent } from './productdisplay/addproduct/addproduct.component';
const arr:Routes=[
  {path:'',component:DisplayUserComponent},
  {path:'product',component:ProductdisplayComponent},
  {path:'addproduct',component:AddproductComponent},
  {path:'category',component:CategorydisplayComponent}
];
export const routingArr=RouterModule.forRoot(arr);
