import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  Name:string="supriya";
  name:string="my name is Supriya";
  fullName:string="Supriya Kishanrao Jadhav"; 
  gender:string="female";
  Date:any=new Date();
  Number:any=9960432740;
  money:any=1234;
  
}
