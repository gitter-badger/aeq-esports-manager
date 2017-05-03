import { FormControl } from '@angular/forms';
import { isPresent } from '../facade/lang';

import { containsSymbol } from './contains-symbol.validator';


describe('ContainsSymbolValidator', () => {

    it('"Test123" should not contain symbol', () => {
        let control = new FormControl('Test123');
        let result = containsSymbol(control);
        expect(isPresent(result)).toBeTruthy();
    });

    it('"Test123%" should contain symbol', () => {
        let control = new FormControl('Test123%');
        let result = containsSymbol(control);
        expect(isPresent(result)).toBeFalsy();
    });
    
});