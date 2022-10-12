import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ViewcomponentComponent } from './viewcomponent/viewcomponent.component';

@Component({
  selector: 'app-viewchild',
  templateUrl: './viewchild.component.html',
  styleUrls: ['./viewchild.component.css']
})
export class ViewchildComponent implements OnInit {
  @ViewChild('view')
  View !: ElementRef;
  subject="Angular viewchild";

  @ViewChild(ViewcomponentComponent) childcom !: ViewcomponentComponent ;
  constructor( private renderer : Renderer2) { }
  ngAfterViewInit(){
    console.log(this.View);
    // this.View.nativeElement.style.backgroundColor="blue"
    this.renderer.setStyle(this.View.nativeElement, 'backgroundColor','red')
    this.renderer.setStyle(this.View.nativeElement, 'color','white')
    this.View.nativeElement.classList="joy"
    this.View.nativeElement.innerHTML="this is angular tutorial"
    //child component access
    console.log(this.childcom);
    
  }
  changechild(){
   this.childcom.clickme()
  }
  changechildname(){
   this.childcom.uname="joya"
  }
 
  ngOnInit(): void {
   
     
  }
  //renderer is a pre build class of angular which helps us use any dom element
 
}
