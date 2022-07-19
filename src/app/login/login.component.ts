import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  constructor(private fb:FormBuilder) { }
sub = false
  loginForm = this.fb.group({
    phonenumber:['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
    password:['']
  })
  get f(){
    return this.loginForm.controls;
  }
  onsubmit(){
    this.sub = true;
    console.log("addform");
    console.log("f",this.f.phonenumber.errors);

  }

}
