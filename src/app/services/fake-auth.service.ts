import { Injectable } from '@angular/core';
import { isEmpty } from "../helpers/lang";
import 'rxjs/add/operator/map'

@Injectable()
export class FakeAuthService {

    /**
     * Whether the user is currently logged in.
     */
    private _authenticated: boolean;

    /**
     * Attempts to authenticate the current user with the provided credentials.
     *
     * @param username the username
     * @param password the password
     * @returns {Promise<T>} a promise that resolves to true when the authentication was successful or gets rejected
     * when the authentication failed
     */
    login(username: string, password: string): Promise<boolean> {
        return new Promise((resolve, reject) => {
            if (isEmpty(username) || isEmpty(password)) reject(false);
            setTimeout(() => {
                this._authenticated = true;
                resolve(true);
            }, 2000);
        });
    }

    logout() {
        this._authenticated = false
    }

    isAuthenticated(): boolean {
        return this._authenticated;
    }
}