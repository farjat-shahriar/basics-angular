import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-fromevent',
  templateUrl: './fromevent.component.html',
  styleUrls: ['./fromevent.component.css']
})
export class FromeventComponent implements OnInit {
@ViewChild('bttn') Btn!:ElementRef
  constructor() { }

  ngOnInit(): void {
    // fromEvent(this.Btn.nativeElement,'click')
  }
  ngAfterViewInit(){
    let c=1;
    fromEvent(this.Btn.nativeElement,'click').subscribe((res)=>{
      let cval= "video " + c++
        console.log(cval);
        this.print(cval);
    })
  }

  print(val:any){
    let el =document.createElement('li')
    el.innerText=val;
    document.getElementById('elcontainer')?.append(el)
  }

}
