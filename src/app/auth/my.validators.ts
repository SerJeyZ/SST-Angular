import { FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms'

export class MyValidators {

  static confrimPassword: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
    const pass = control.get('pass');
    const pass2 = control.get('pass2');
    return pass && pass2 && pass.value === pass2.value ? null : { invalidPass: true };
  };

}
