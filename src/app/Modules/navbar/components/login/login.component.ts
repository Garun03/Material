import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  loginForm = new FormGroup ({
    email : new FormControl('', [Validators.required, Validators.email]),
    password : new FormControl('', [Validators.required, Validators.minLength(5)])
  })

loginUser()
{
  console.warn(this.loginForm.value)
}
get email()
{
  return this.loginForm.get('email')
}
get password ()
{
  return this.loginForm.get('password')
}
}
