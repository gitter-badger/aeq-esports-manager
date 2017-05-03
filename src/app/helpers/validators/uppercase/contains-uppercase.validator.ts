import { AbstractControl, ValidatorFn, Validators } from '@angular/forms';

import { isPresent } from '../facade/lang';


/**
 * Validator that requires controls to have a least one uppercase letter.
 */
export const containsUppercase: ValidatorFn = (control: AbstractControl): { [key: string]: any } => {
    if (isPresent(Validators.required(control))) return null;
    var regex = /[A-Z]/;
    var v: string = control.value;
    return v.match(regex) ? null : { "containsUppercase": true };
}