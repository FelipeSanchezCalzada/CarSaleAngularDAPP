import {Component} from '@angular/core';
import {FieldType} from '@ngx-formly/material';

@Component({
  selector: 'app-number-input',
  templateUrl: './number-input.component.html',
  styleUrls: ['./number-input.component.scss']
})

export class NumberInputComponent extends FieldType  {
}
