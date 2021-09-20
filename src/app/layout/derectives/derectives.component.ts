import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-derectives',
  templateUrl: './derectives.component.html',
  styleUrls: ['./derectives.component.css']
})
export class DerectivesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  } 

  isvalid:any;
  isinvalid:any;

  change(value:any){
    // console.log(value);
    if(value=="Male"){ 
      // console.log("You Clicked On Male");
      this.isvalid = true;
      this.isinvalid =false;
     }else{ 
      // console.log("You Clicked On Female");
      this.isvalid = false;
      this.isinvalid =true;
    }
  } 

  valid:any=false;
  invalid:any=false;

  choose(value:any){
    // console.log(value); 
    if(value=="One"){ 
      // console.log("You Clicked On One");
      this.valid = true; 
     }else{ 
      // console.log("You Clicked On Two");
      this.valid = false; 
    }
  }  

  color:any;
  check(value:any){
    // console.log(value); 
    if(value=="pink"){ 
      // console.log("You Clicked On pink");
      this.color = true; 
     }else{ 
      // console.log("You Clicked On purple");
      this.color = false; 
    }
  }  

  peoples=["Supriya","Sandhya","Shailaja"];

  Informations=[
    {name:'Supriya',Favcolor:'Purple',condition:true},
    {name:'Sandhya',Favcolor:'Pink',condition:false},
    {name:'Shailaja',Favcolor:'Red',condition:true}
  ];

  colorText:any;
  getColor(Favcolor:any):any{  
    switch(Favcolor){
      case "Purple":
        return 'purple';
      case "Pink":
        return 'pink';
      case "Red":
        return 'red';
    }
  }

  cssColor:any;
  getCssColor(color:any){
    if(color=="color"){
      this.cssColor={
        'three':true,
        'two':true
      }
    }else{
      this.cssColor={
        'one':true,
        'two':false,
        'four':true
      }
    }
    return this.cssColor;
  }

  getlistColor(color:any){
    if(color=="color"){
      this.cssColor={
        'one':true,
        'two':false,
        'four':true
      }
    }else{
      this.cssColor={
        'three':true,
        'two':true
      }
    }
    return this.cssColor;
  }

}
  