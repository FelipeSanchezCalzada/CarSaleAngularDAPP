import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MatFormFieldModule} from '@angular/material/form-field';
import {HomeComponent} from './components/home/home.component';
import {NewVehicleFormComponent} from './components/forms/new-vehicle-form/new-vehicle-form.component';
import {NewOwnerFormComponent} from './components/forms/new-owner-form/new-owner-form.component';
import {NewSellerFormComponent} from './components/forms/new-seller-form/new-seller-form.component';


const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'new-vehicle', component: NewVehicleFormComponent},
    {path: 'new-owner', component: NewOwnerFormComponent},
    {path: 'new-seller', component: NewSellerFormComponent},
    {path: '**', redirectTo: '/home'},
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
