import { Component, OnInit } from '@angular/core';
import { from, interval, map, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
 sub1 !:Subscription
  msg !: string;
  msg2 =[{
   
}];
  constructor() { }

  ngOnInit(): void {

    const data = interval(1000)

   this.sub1=data.pipe(
    map(data => 'videos '+ data)
    )
   .subscribe((res)=>{
      // console.log( res);
      this.msg=res;
       })

    setTimeout(() => {
      this.sub1.unsubscribe()
    }, 10000);

    this.members.pipe(
      map(data=>data.name)
    ).subscribe(res=>{
     this.msg2.push(res);
     })
  }


    members = from([
    {id:1, name:'joy'},
    {id:2, name:'joya'},
    {id:3, name:'jonny'},
    {id:4, name:'jesmin'},
    {id:5, name:'jui'},
  ])
   
}
