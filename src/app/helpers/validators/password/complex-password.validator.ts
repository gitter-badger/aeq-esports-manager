import { AbstractControl, ValidatorFn, Validators } from '@angular/forms';
import { isPresent } from '../facade/lang';

import { containsLowercase } from '../lowercase/contains-lowercase.validator';
import { containsUppercase } from '../uppercase/contains-uppercase.validator';
import { containsNumber } from '../number/contains-number.validator';
import { containsSymbol } from '../symbol/contains-symbol.validator';

/**
 * Validator that requires controls to have a complex password.
 */
export const complexPassword: ValidatorFn = (control: AbstractControl): { [key: string]: any } => {
  return Validators.compose([
    Validators.minLength(8), containsLowercase, containsUppercase, containsNumber, containsSymbol
  ])(control);
}
