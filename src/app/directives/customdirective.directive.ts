import { ElementRef } from '@angular/core';
import { Directive } from '@angular/core';

@Directive({
  selector: '[appCustomdirective]'
})
export class CustomdirectiveDirective {

  constructor(private elementref:ElementRef) {
    this.elementref.nativeElement.style.color="red";
  } 
} 