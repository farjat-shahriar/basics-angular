import { Component, OnInit } from '@angular/core';
import { filter, from } from 'rxjs';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  result: any=[]
  constructor() { }

  ngOnInit(): void {
    this.members.pipe(
      filter(data => data.name.length <= 3)
    ).subscribe((res)=>{
        this.result=res;
        console.log(this.result); 
    })
  }
  members = from([
    {id:1, name:'joy'},
    {id:2, name:'joya'},
    {id:3, name:'jonny'},
    {id:4, name:'jesmin'},
    {id:5, name:'jui'},
    {id:6, name:'jasia'}
  ])
}