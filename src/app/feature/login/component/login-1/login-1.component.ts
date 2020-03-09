import { Component } from "@angular/core";
import { NgForm, FormGroup } from '@angular/forms';

@Component({
  selector: "login-login-1",
  templateUrl: "./login-1.component.html",
  styleUrls: ["./login-1.component.scss"]
})
export class Login1Component { 
  loginForm: FormGroup;
  
  save(form: NgForm) {
    console.log(form);
  }
}