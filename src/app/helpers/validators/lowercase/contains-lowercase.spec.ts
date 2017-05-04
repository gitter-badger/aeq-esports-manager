import { FormControl } from '@angular/forms';
import { isPresent } from '../facade/lang';

import { containsLowercase } from './contains-lowercase.validator';


describe('ContainsLowercaseValidator', () => {

    it('"TEST" should not contain lowercase letter', () => {
        let control = new FormControl('TEST');
        let result = containsLowercase(control);
        expect(isPresent(result)).toBeTruthy();
    });

    it('"Test" should contain lowercase letter', () => {
        let control = new FormControl('Test');
        let result = containsLowercase(control);
        expect(isPresent(result)).toBeFalsy();
    });
    
});