import { AbstractControl, ValidatorFn, Validators } from '@angular/forms';

import { isPresent } from '../facade/lang';

/**
 * Validator that requires controls to have a least one lowercase letter.
 */
export const containsLowercase: ValidatorFn = (control: AbstractControl): { [key: string]: any } => {
    if (isPresent(Validators.required(control))) return null;
    var regex = /[a-z]/;
    var v: string = control.value;
    return v.match(regex) ? null : { "containsLowercase": true };
}