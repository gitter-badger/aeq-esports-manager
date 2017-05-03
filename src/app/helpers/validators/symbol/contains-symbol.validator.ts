import { AbstractControl, ValidatorFn, Validators } from '@angular/forms';

import { isPresent } from '../facade/lang';


/**
 * Validator that requires controls to have a least one symbol.
 */
export const containsSymbol: ValidatorFn = (control: AbstractControl): { [key: string]: any } => {
    if (isPresent(Validators.required(control))) return null;
    var regex = /[ !"#$%&'()*+,-.\/:;<=>?@[\]^_`{}~]/;
    var v: string = control.value;
    return v.match(regex) ? null : { "containsSymbol": true };
}