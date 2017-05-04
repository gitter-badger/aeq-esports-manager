import { FormControl } from '@angular/forms';
import { isPresent } from '../facade/lang';

import { containsUppercase } from './contains-uppercase.validator';


describe('ContainsUppercaseValidator', () => {

    it('"test123" should not contain uppercase letter', () => {
        let control = new FormControl('test123');
        let result = containsUppercase(control);
        expect(isPresent(result)).toBeTruthy();
    });

    it('"Test123" should contain uppercase letter', () => {
        let control = new FormControl('Test123');
        let result = containsUppercase(control);
        expect(isPresent(result)).toBeFalsy();
    });
    
});