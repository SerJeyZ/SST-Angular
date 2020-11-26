import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset',
  templateUrl: './reset-page.component.html',
  styleUrls: ['./reset-page.component.scss']
})
export class ResetPageComponent implements OnInit {

  form:FormGroup

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')])
    })
  }
  submit() {
    console.log(this.form)
    this.router.navigate(['/reset-step2'])
  }
}
