import { FormControl } from '@angular/forms';
import { isPresent } from '../facade/lang';

import { containsNumber } from './contains-number.validator';


describe('ContainsNumberValidator', () => {

    it('"Test" should not contain number', () => {
        let control = new FormControl('Test');
        let result = containsNumber(control);
        expect(isPresent(result)).toBeTruthy();
    });

    it('"Test123" should contain number', () => {
        let control = new FormControl('Test123');
        let result = containsNumber(control);
        expect(isPresent(result)).toBeFalsy();
    });
    
});