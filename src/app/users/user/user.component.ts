import { HttpClient } from '@angular/common/http';
import { TypeofExpr } from '@angular/compiler';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { map } from 'rxjs';
import { user } from '../user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
@ViewChild('submitdata') submitdata!:NgForm
url ='https://manage-products-cf548-default-rtdb.firebaseio.com/user.json'
users=[
  {name:'joy', Technology:'Angular'},
  {name:'joya', Technology:'javascript'},
  {name:'joya', Technology:'javascript'},

]
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.fetchUser()
  }
  onsubmit(user:any){
     console.log(user);
    this.users.push(user)
    this.http.post<any>(this.url,user).subscribe((res)=>{
         console.log(res);
         
    })
  }
  fetchUser(){
console.log( this.http.get<user>(this.url)
.pipe(map(res=>{
//  const uarray=[];
  for(const key in res){
  // console.log(key);
  
  
  // uarray.push({uid:key, ...res[key]})
}
// return uarray;
}
))
.subscribe((res)=>{
  console.log(res);
  
}));

  }
 
  
}
