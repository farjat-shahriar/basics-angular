import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup,Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  myReactiveForm !: FormGroup 
  notAllowedName=['farjat shahriar','joy'];

  constructor() { }

  ngOnInit(): void {
    this.myReactiveForm = new FormGroup({
     'FormDetails' : new FormGroup({
        'username': new FormControl(null,[ Validators.required,this.NANname.bind(this)]),
        'email': new FormControl(null, [Validators.required,Validators.email], ),
      }),
   
      'course': new FormControl('Angular'),
       'skills': new FormArray([
        new FormControl(null, Validators.required ),
     
   
      ])
   
    })
    setTimeout(() => {
      this.myReactiveForm.setValue({
        'FormDetails' :{
          'username':"joya",
          'email': "joya@gmail.com",
        },
        'course':"Angular",
        'skills':[
          "Fucking"
        ]
  
      })
      
    }, 2000);

    setTimeout(() => {
      this.myReactiveForm.patchValue({
        'FormDetails' :{
          
          'email': "joyaum@gmail.com",
        },
        
  
      })
      
    }, 3000);
  
  }
  get skillsdata() {
    return this.myReactiveForm.controls['skills'] as FormArray
  }

  AddSkill(){
   (<FormArray> this.myReactiveForm.get('skills')).push(new FormControl(null, Validators.required))
  }

  onSubmit(){
    console.log(this.myReactiveForm);
    this.myReactiveForm.reset({})
    
  }
  NANname(control:FormControl){
  if( this.notAllowedName.indexOf(control.value) !== -1){
  return {'nameisnotallow': true}
   } 
   return null;
  }

   NaEmail(control:FormControl):Promise<any>| Observable<any>{
       const Response =new Promise<any>((resolve,reject)=>{
        setTimeout(() => {
          if(control.value=='fs@gmail.com'){
            resolve({'emailNotAllow':true})
          }
          else{
            resolve(null)
          }
        }, 1500);
       })
       return Response;
   }

  
}






                                                           