import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ProducrserviceService } from 'src/app/services/producrservice.service';

@Component({
  selector: 'app-manage-product',
  templateUrl: './manage-product.component.html',
  styleUrls: ['./manage-product.component.css']
})
export class ManageProductComponent implements OnInit {
  @ViewChild('id') id !:ElementRef
  @ViewChild('name') name !:ElementRef
  @ViewChild('price') price !:ElementRef
  editMode=false
  fetching=false
  editindex:any
  product: any=[
    // {
    //   id:'p1',
    //   name:'Mobile',
    //   price:'25000',
    // },
    //  {
    //   id:'p2',
    //   name:'car',
    //   price:'2225000',
    // },
    //  {
    //   id:'p3',
    //   name:'laptop',
    //   price:'85000',
    // },
  ];

  constructor(private productServices:ProducrserviceService) { }

  ngOnInit(): void {
    this.FetchData()
  }
  AddProduct(id:any,name:any, price:any){
    if(this.editMode){
      console.log(this.product[this.editindex]);
      
   this.product[this.editindex]={
    id:id.value,
    name:name.value,
    price:price.value
   }
   this.editMode=false
    }
    else{
      this.product.push({
        id:id.value,
        name:name.value,
        price:price.value
      })
    }
    this.SaveProducts()

  
  }
  SaveProducts(){
    this.productServices.saveproducts(this.product).subscribe((res)=>{
  //  console.log(res);
  });
  }
  FetchData(){
    this.fetching=true
    this.productServices.FetchData().subscribe((data)=>{
    console.log(data);
  
    const Data = JSON.stringify(data);
 console.log(Data);
 this.product=JSON.parse(Data);
 this.fetching=false
    })

  }
  DeleteProduct(i:any){
//  console.log(i);
 if(confirm('Do you want to remove this product'))
     this.product.splice(i,1)
     this.SaveProducts()
  }
 
  EditProduct(index:number){
    this.editMode=true;
    this.editindex=index
    console.log(this.product[index]);
    this.id.nativeElement.value= this.product[index].id;
    this.name.nativeElement.value= this.product[index].name;
    this.price.nativeElement.value= this.product[index].price;
    
  }
}
