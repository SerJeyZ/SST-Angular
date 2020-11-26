import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/shared/interface';

@Component({
  selector: 'app-login',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  form: FormGroup
  remembeMe: boolean = false

  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required]),
      password: new FormControl(null,[Validators.required, Validators.minLength(7)])
    })
  }
  submit() {
    console.log(this.form)
    console.log(this.remembeMe)
    if(this.form.invalid) {
      return
    }
    const user:User = {
      email: this.form.value.email,
      password: this.form.value.password
    }
  }
  
}
