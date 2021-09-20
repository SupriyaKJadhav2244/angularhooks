import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private cookieService:CookieService){}

  title = 'angularhooks';
  value:any;
  cookieVar:any;
  cName:any;
  cUser:any;
  check:any;
  
  submit(fname:any){
    // console.log(fname.value);
    this.value = fname.value;   

    this.cookieService.set('cookieName','Supee');
    this.cookieService.set('cookieUser','Supee@gmail.com');

    this.cookieVar = this.cookieService.getAll();
    // console.log(this.cookieVar);
    this.cName=this.cookieVar.cookieName;
    this.cUser=this.cookieVar.cookieUser;

    this.check=this.cookieService.check('cookieUser');
    console.log(this.check);

    // this.cookieService.delete('cookieUser');
    this.cookieService.deleteAll();
  }

  onClick(){  
    console.log("DIV is clicked ");
  }
  save($event: any){
    console.log("button is clicked "+$event);
  }
}
