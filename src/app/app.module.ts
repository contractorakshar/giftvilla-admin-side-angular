import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routingArr } from './app.routing';
import { FormsModule } from "@angular/forms";
import { HttpClientModule} from '@angular/common/http';
import { MatCardModule,MatIconModule,MatButtonModule,MatTableModule, MatSelectModule, MatFormFieldModule, MatPaginatorModule, MatCheckboxModule, MatDialogModule, MatSortModule, MatSortHeader, MatFormFieldControl} from '@angular/material';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenubarComponent } from './menubar/menubar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { DisplayUserComponent } from './display-user/display-user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ViewmoreComponent } from './display-user/viewmore/viewmore.component';
import { ProductdisplayComponent } from './productdisplay/productdisplay.component';
import { ProductviewmoreComponent } from './productdisplay/productviewmore/productviewmore.component';
import { CategoryviewmoreComponent } from './categorydisplay/categoryviewmore/categoryviewmore.component';
import { CategorydisplayComponent } from './categorydisplay/categorydisplay.component';
import { AddproductComponent } from './productdisplay/addproduct/addproduct.component';

@NgModule({
  declarations: [
    AppComponent,
    MenubarComponent,
    DisplayUserComponent,
    ViewmoreComponent,
    ProductdisplayComponent,
    ProductviewmoreComponent,
    CategorydisplayComponent,
    CategoryviewmoreComponent,
    AddproductComponent
  ],
  imports: [
    BrowserModule,
    MatInputModule,
    FormsModule,
    routingArr,
    MatSelectModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatPaginatorModule,
    MatTableModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    HttpClientModule,
    MatTableModule,
    MatSortModule,
  ],
  entryComponents:[
    ViewmoreComponent,
    ProductviewmoreComponent,
    CategoryviewmoreComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
