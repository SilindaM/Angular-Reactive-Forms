import { Component, OnInit } from '@angular/core';
import {FormBuilder ,Validators } from "@angular/forms";

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  constructor(private fb:FormBuilder) { }
  
  formInstance=this.fb.group({
    lastName:['',Validators.required],
    firstName:['',Validators.required]
  })

  ngOnInit(): void {
  }
  //submit button
onSubmit(){
  console.warn(this.formInstance.value);
}
}
