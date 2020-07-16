import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {SideNavComponent} from './components/nav/side-nav/side-nav.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {HomeComponent} from './components/home/home.component';
import {NewVehicleFormComponent} from './components/forms/new-vehicle-form/new-vehicle-form.component';
import {MatCardModule} from '@angular/material/card';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FormlyModule} from '@ngx-formly/core';
import {FormlyMaterialModule} from '@ngx-formly/material';
import {NumberInputComponent} from './components/forms/extra/number-input/number-input.component';
import {EthereumAddressValidator} from './input-validators';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { ButtonFieldComponent } from './components/forms/extra/button-field/button-field.component';
import {MatDialogModule} from '@angular/material/dialog';
import {NewOwnerFormComponent} from './components/forms/new-owner-form/new-owner-form.component';
import { NewSellerFormComponent } from './components/forms/new-seller-form/new-seller-form.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { AllVehiclesTableComponent } from './components/tables/all-vehicles-table/all-vehicles-table.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import { MainSettingsComponent } from './components/settings/main-settings/main-settings.component';

@NgModule({
    declarations: [
        AppComponent,
        SideNavComponent,
        HomeComponent,
        NewVehicleFormComponent,
        NumberInputComponent,
        ButtonFieldComponent,
        NewOwnerFormComponent,
        NewSellerFormComponent,
        AllVehiclesTableComponent,
        MainSettingsComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatFormFieldModule,
        MatInputModule,
        MatSidenavModule,
        MatToolbarModule,
        MatListModule,
        MatIconModule,
        MatButtonModule,
        MatCardModule,
        ReactiveFormsModule,
        FormlyModule.forRoot({
            types: [
                {name: 'number', component: NumberInputComponent},
                {name: 'button-action', component: ButtonFieldComponent},
            ],
            validators: [
                {name: 'eth_address', validation: EthereumAddressValidator},
            ],
            validationMessages: [
                {name: 'eth_address', message: 'Formato incorrecto'},
                {name: 'required', message: 'Este campo es obligatorio'}
            ],
        }),
        FormlyMaterialModule,
        MatProgressSpinnerModule,
        MatDialogModule,
        MatExpansionModule,
        MatSnackBarModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
