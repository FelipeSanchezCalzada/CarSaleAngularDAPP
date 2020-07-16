import {ChangeDetectorRef, Component} from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import {NewOwnerFormComponent} from './components/forms/new-owner-form/new-owner-form.component';
import {MatDialog} from '@angular/material/dialog';
import {MainSettingsComponent} from './components/settings/main-settings/main-settings.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularDAPP';

    mobileQuery: MediaQueryList;


    // tslint:disable-next-line:variable-name
    private _mobileQueryListener: () => void;

    constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, public dialog: MatDialog) {
        this.mobileQuery = media.matchMedia('(max-width: 600px)');
        this._mobileQueryListener = () => changeDetectorRef.detectChanges();
        this.mobileQuery.addListener(this._mobileQueryListener);
    }

    launchSettingsModal() {
        const dialogRef = this.dialog.open(MainSettingsComponent, {});
    }

}
