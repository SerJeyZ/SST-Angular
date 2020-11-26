import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { MyValidators } from '../my.validators';


@Component({
  selector: 'app-reset-step2',
  templateUrl: './reset-step2-page.component.html',
  styleUrls: ['./reset-step2-page.component.scss']
})
export class ResetStep2PageComponent implements OnInit {
  
  form: FormGroup
  password: FormGroup
  notSame: boolean = false

  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      password: new FormGroup({
        pass: new FormControl(null, [Validators.required, Validators.minLength(7)]),
        pass2: new FormControl(null, Validators.required)
      }, { validators: MyValidators.confrimPassword})
    })
  }
  submit() {
    console.log(this.form)
    if (this.form.invalid) {
      return
    }
  }
}
