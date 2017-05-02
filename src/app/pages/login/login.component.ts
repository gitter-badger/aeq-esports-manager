import { Component, EventEmitter, OnInit, Output, ViewEncapsulation } from "@angular/core";
import { AbstractControl, FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

    public loginForm: FormGroup;
    public usernameCtrl: AbstractControl;
    public passwordCtrl: AbstractControl;

    /**
     * Whether authentication is currently is progress.
     */
    private _loading: boolean = false;

    constructor(private _fb: FormBuilder) {
        this.initializeLoginForm();
    }

    ngOnInit() {

    }

    /**
     * Initializes the login form.
     */
    private initializeLoginForm() {
        this.loginForm = this._fb.group({
            username: ['', Validators.required],
            password: ['', Validators.compose([
                Validators.required
            ])]
        });
        this.usernameCtrl = this.loginForm.get('username');
        this.passwordCtrl = this.loginForm.get('password');
    }

    /**
     * Attempts to login the user with the specified credentials. Delegated to the login service.
     */
    login() {
        // TODO
    }

    /**
     * Redirects to the registration form foe a new user.
     */
    redirectToRegisterPage() {
        // TODO
    }

    /**
     * Redirects to the recover password page.
     */
    redirectToRecoverPasswordPage() {
        // TODO
    }

}
