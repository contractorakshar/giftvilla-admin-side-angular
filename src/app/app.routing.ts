import { RouterModule,Routes } from '@angular/router';
import { DisplayUserComponent } from './display-user/display-user.component';
import { ProductdisplayComponent } from './productdisplay/productdisplay.component';
import { CategorydisplayComponent } from './categorydisplay/categorydisplay.component';
const arr:Routes=[
  {path:'',component:DisplayUserComponent},
  {path:'product',component:ProductdisplayComponent},
  {path:'category',component:CategorydisplayComponent}
];
export const routingArr=RouterModule.forRoot(arr);
