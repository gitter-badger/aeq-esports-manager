import { FormControl } from '@angular/forms';
import { isPresent } from '../facade/lang';

import { complexPassword } from './complex-password.validator';


describe('PasswordValidators', () => {

    it('"ALLUPPERCASE" should not be valid password', () => {
        let control = new FormControl('ALLUPPERCASE');
        let result = complexPassword(control);
        expect(isPresent(result)).toBeTruthy();
    });

    it('"alllowercase" should not be valid password', () => {
        let control = new FormControl('alllowercase');
        let result = complexPassword(control);
        expect(isPresent(result)).toBeTruthy();
    });

    it('"1234567890" should not be valid password', () => {
        let control = new FormControl('1234567890');
        let result = complexPassword(control);
        expect(isPresent(result)).toBeTruthy();
    });

    it('"%Test%" should not be valid password', () => {
        let control = new FormControl('%Test%');
        let result = complexPassword(control);
        expect(isPresent(result)).toBeTruthy();
    });

    it('"%Test1%" should not be valid password', () => {
        let control = new FormControl('%Test1%');
        let result = complexPassword(control);
        expect(isPresent(result)).toBeTruthy();
    });

    it('"%Test12%" should be valid password', () => {
        let control = new FormControl('%Test12%');
        let result = complexPassword(control);
        expect(isPresent(result)).toBeFalsy();
    });

    it('"JustA%Pass12word" should be valid password', () => {
        let control = new FormControl('JustA%Pass12word');
        let result = complexPassword(control);
        expect(isPresent(result)).toBeFalsy();
    });
    
});