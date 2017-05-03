import { AbstractControl, ValidatorFn, Validators } from '@angular/forms';

import { isPresent } from '../facade/lang';


/**
 * Validator that requires controls to have a least one number.
 */
export const containsNumber: ValidatorFn = (control: AbstractControl): { [key: string]: any } => {
    if (isPresent(Validators.required(control))) return null;
    var regex = /[0-9]/;
    var v: string = control.value;
    return v.match(regex) ? null : { "containsNumber": true };
}