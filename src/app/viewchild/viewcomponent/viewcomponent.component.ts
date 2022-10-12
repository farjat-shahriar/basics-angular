import { AfterContentInit, Component, ContentChild, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TestDirectiveDirective } from 'src/app/directives/test-directive.directive';

@Component({
  selector: 'app-viewcomponent',
  templateUrl: './viewcomponent.component.html',
  styleUrls: ['./viewcomponent.component.css']
})
export class ViewcomponentComponent implements OnInit,AfterContentInit {
  uname = "joy"
  @ContentChild('child')
  childparagraph !: ElementRef<any>;
  @ViewChild(TestDirectiveDirective) testDir !:TestDirectiveDirective
  constructor() { }
  ngAfterContentInit() {
    console.log(this.childparagraph.nativeElement);
  }
  ngOnInit(): void {

  }
  clickme() {
    alert("this is a child component")
  }
  changecolor(color:string){
    this.testDir.changeBg(color)
  }
}
