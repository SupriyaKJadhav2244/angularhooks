import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'; 
import { ChildcomponentComponent } from './childcomponent/childcomponent.component';
import { DerectivesComponent } from './layout/derectives/derectives.component';
import { FiltersComponent } from './layout/filters/filters.component';
import { MypipePipe } from './mypipe.pipe';
import { CustomdirectiveDirective } from './directives/customdirective.directive'; 

import { CookieService } from 'ngx-cookie-service';

@NgModule({
  declarations: [
    AppComponent, 
    ChildcomponentComponent, 
    DerectivesComponent, 
    FiltersComponent,   
    MypipePipe, 
    CustomdirectiveDirective 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
