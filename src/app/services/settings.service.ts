import {Injectable} from '@angular/core';
import {ABIContract} from '../ABIContracts/ABIs';
import {environment} from '../../environments/environment';

const CONTRACT_ABI = 'ContractABI';
const CONTRACT_ADDR = 'ContractAddress';

@Injectable({
    providedIn: 'root'
})
export class SettingsService {

    ContractABI: string;
    ContractAddress: string;

    constructor() {
        this.ContractABI = localStorage.getItem(CONTRACT_ABI);
        this.ContractAddress = localStorage.getItem(CONTRACT_ADDR);

        if (!this.ContractABI) {
            this.setContractABI(environment.ContractABI);
        }
        if (!this.ContractAddress) {
            this.setContractAddress(environment.ContractAddress);
        }

    }


    setContractABI(abi: string) {
        localStorage.setItem(CONTRACT_ABI, abi);
        this.ContractABI = abi;
    }

    setContractAddress(addr: string) {
        console.log(addr);
        localStorage.setItem(CONTRACT_ADDR, addr);
        this.ContractAddress = addr;
    }




    resetSettings() {
        this.setContractABI(environment.ContractABI);
        this.setContractAddress(environment.ContractAddress);
    }

}
