import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-pipes',
  templateUrl: './custom-pipes.component.html',
  styleUrls: ['./custom-pipes.component.css']
})
export class CustomPipesComponent implements OnInit {
 value="this is a txt value of custom property"
  constructor() { }

  ngOnInit(): void {
  }
 
//   nameArray = [

//     "Rachel Edwards",
//     "Christopher Perez",
//     "Thom",
//     "Sara Moore",
//     "Chris Bailey",
//     "Roger Johnson",
//     "Marilyn Thompson",
//     "Anthony Evans",
//     "Julie Hall",
//     "Paula Phillips",
//     "Annie Hernandez",
//     "Dorothy Murphy",
//     "Alice Howard"
// ]
searchitem=""
custom_arr=[
  {
   sno:1,
   pname:'mobile',
   price:'12000',
   handle:'f@gmail.com'
  },
   {
   sno:2,
   pname:'telephone',
   price:'32000',
   handle:'fas@gmail.com'
  }, 
  {
   sno:3,
   pname:'laptop',
   price:'62000',
   handle:'laptop@gmail.com'
  },
   {
   sno:4,
   pname:'machine',
   price:'72000',
   handle:'machine@gmail.com'
  },
   {
   sno:5,
   pname:'headphone',
   price:'10000',
   handle:'headphone@gmail.com'
  },
]
}
