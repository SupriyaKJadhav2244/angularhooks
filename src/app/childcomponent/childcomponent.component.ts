import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, DoCheck, Input, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-childcomponent',
  templateUrl: './childcomponent.component.html',
  styleUrls: ['./childcomponent.component.css']
})
export class ChildcomponentComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, 
AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy{ 

  @Input() myValue:any;
  
  constructor() { 
    // console.log("Constructor Working...");
  } 

  ngOnChanges(changes:SimpleChanges){ 
    // console.log("ngOnChanges Working... "+changes.myValue.currentValue);
  }
  
  ngOnInit(): void {
    // console.log("ngOnInit Working...");
  }

  ngDoCheck(): void {
    // console.log("ngDoCheck Working...");
  }

  ngAfterContentInit(): void {
    // console.log("ngAfterContentInit Working...");
  }

  ngAfterContentChecked(): void {
    // console.log("ngAfterContentChecked Working...");
  }

  ngAfterViewInit(): void {
    // console.log("ngAfterViewInit Working...");
  }

  ngAfterViewChecked(): void {
    // console.log("ngAfterViewChecked Working...");
  }

  ngOnDestroy(): void {
    // console.log("ngOnDestroy Working...");
  }

}
