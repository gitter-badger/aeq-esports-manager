import { Component, EventEmitter, OnInit, Output, ViewEncapsulation } from "@angular/core";
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from "@angular/forms";
import { FakeAuthService } from "../../services/fake-auth.service";
import { Router } from "@angular/router";

@Component({
    selector: 'aem-login',
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
    loading: boolean = false;

    constructor(private _fb: FormBuilder, private _authService: FakeAuthService, private _router: Router) {
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
        let username = this.usernameCtrl.value;
        let password = this.passwordCtrl.value;
        this._authService.login(username, password).then(() => {
            this._router.navigate(['home']);
        }).catch(() => {
            this.loginForm.setErrors({
                invalidLogin: true
            });
        });
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
