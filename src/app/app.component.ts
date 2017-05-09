import { Component, ViewEncapsulation } from '@angular/core';
import { MdIconRegistry } from "@angular/material";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None,
})
export class AppComponent {

    constructor(private _mdIconRegistry: MdIconRegistry, private _sanitizer: DomSanitizer) {
        this.registerIcons();
    }

    registerIcons() {
        this._mdIconRegistry.addSvgIcon('github',
            this._sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/github.svg'));
    }

}
