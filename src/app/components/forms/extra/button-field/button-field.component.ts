import {Component, OnInit} from '@angular/core';
import {FieldType} from '@ngx-formly/material';

@Component({
    selector: 'app-button-field',
    templateUrl: './button-field.component.html',
    styleUrls: ['./button-field.component.scss']
})
export class ButtonFieldComponent extends FieldType {

    btnClick() {
        this.to.onClick();
    }

}
