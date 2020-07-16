import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-home',
    // tslint:disable-next-line:no-host-metadata-property
    host: {
        class: 'w-100 px-30px'
    },
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    constructor() {
    }

    ngOnInit(): void {
    }

}
