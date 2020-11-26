import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { MyValidators } from '../my.validators';

@Component({
  selector: 'app-registration',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.scss']
})
export class RegistrationPageComponent implements OnInit {

  formReg: FormGroup
  password: FormGroup
  agreement: boolean = false

  constructor() {}

  ngOnInit(): void {
    this.formReg = new FormGroup({
      login: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
      password: new FormGroup({
        pass: new FormControl(null, [Validators.required, Validators.minLength(7)]),
        pass2: new FormControl(null, Validators.required),
      },{ validators: MyValidators.confrimPassword }),
      fistName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      surname: new FormControl(null, Validators.required),
      phone: new FormControl(null, [Validators.required, Validators.pattern('^[\\d\\+]{11,12}$')])

    })
  }    
  submit() {
    console.log(this.formReg)
    console.log(this.agreement)
    if (this.formReg.invalid) {
      return
    }
    // if (this.agreement===false) {
    //   return
    // }

  }
}
