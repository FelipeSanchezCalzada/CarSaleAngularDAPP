import {Component, Inject, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormlyFieldConfig} from '@ngx-formly/core';
import {WEB3} from '../../../web3';
import Web3 from 'web3';
import {MatSnackBar} from '@angular/material/snack-bar';
import {SettingsService} from '../../../services/settings.service';

@Component({
    selector: 'app-new-seller-form',
    templateUrl: './new-seller-form.component.html',
    styleUrls: ['./new-seller-form.component.scss']
})
export class NewSellerFormComponent implements OnInit {

    loading = false;

    form = new FormGroup({});
    model = {seller: ''};
    fields: FormlyFieldConfig[] = [
        {
            key: 'seller',
            type: 'input',
            templateOptions: {
                label: 'Address del nuevo vendedor',
                // placeholder: '',
                required: true,
            },
            validators: {
                validation: ['eth_address'],
            }
        },
    ];

    constructor(@Inject(WEB3) private web3: Web3, private snackBar: MatSnackBar, private settingsService: SettingsService) {
    }

    ngOnInit(): void {
    }

    onSubmit() {


        this.loading = true;
        const Contract = new this.web3.eth.Contract(JSON.parse(this.settingsService.ContractABI), this.settingsService.ContractAddress);

        const addNewAllowedOwner = Contract.methods.addNewSeller(this.model.seller);

        this.web3.eth.getTransactionCount(this.web3.currentProvider['selectedAddress'], (error, txCount) => {
            const tx = {
                nonce: txCount,
                from: this.web3.currentProvider['selectedAddress'],
                to: this.settingsService.ContractAddress,
                gasPrice: this.web3.utils.toWei('10', 'gwei'),
                gas: '3000000',
                data: addNewAllowedOwner.encodeABI()
            };
            const trans = this.web3.eth.sendTransaction(tx);


            trans.on('transactionHash', receipt => {
                console.log('transactionHash => ' + receipt);
                this.snackBar.open('Esperando respuesta...', 'OK', {
                    duration: 3000
                });
            });
            trans.on('receipt', receipt => {
                console.log('recipt => ' + receipt);
                this.loading = false;
                this.snackBar.open('¡Transaccion finalizada con exito!', 'OK', {
                    duration: 5000
                });
            });
            trans.on('error', error1 => {
                console.log(error1);
                this.loading = false;
                this.snackBar.open('Algo fué mal...', 'OK', {
                    duration: 5000
                });
            });

        });


    }

}
