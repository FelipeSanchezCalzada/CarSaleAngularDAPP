import {Component, OnInit} from '@angular/core';
import {environment} from '../../../../environments/environment';
import {SettingsService} from '../../../services/settings.service';

@Component({
    selector: 'app-main-settings',
    templateUrl: './main-settings.component.html',
    styleUrls: ['./main-settings.component.scss']
})
export class MainSettingsComponent implements OnInit {

    ContractABI: string;
    ContractAddress: string;

    constructor(private settingsService: SettingsService) {

    }

    ngOnInit(): void {
        this.ContractABI = this.settingsService.ContractABI;
        this.ContractAddress = this.settingsService.ContractAddress;
    }

    saveSettings() {
        console.warn('Settings Changued: >>' + this.ContractAddress + '<<');
        this.settingsService.setContractAddress(this.ContractAddress);
        this.settingsService.setContractABI(this.ContractABI);
    }

    resetSettings() {
        this.settingsService.resetSettings();
        this.ngOnInit();
    }

}
