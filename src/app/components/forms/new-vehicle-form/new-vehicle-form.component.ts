import {AfterViewInit, ApplicationRef, Component, Inject, OnInit, ɵNoopNgZone} from '@angular/core';
import {FormControl, FormGroup, ValidationErrors} from '@angular/forms';
import {FormlyFieldConfig} from '@ngx-formly/core';
import {MatDialog} from '@angular/material/dialog';
import {NewOwnerFormComponent} from '../new-owner-form/new-owner-form.component';
import {NewSellerFormComponent} from '../new-seller-form/new-seller-form.component';
import {WEB3} from '../../../web3';
import Web3 from 'web3';
import {MatSnackBar} from '@angular/material/snack-bar';
import {SettingsService} from '../../../services/settings.service';

@Component({
    selector: 'app-new-vehicle-form',
    templateUrl: './new-vehicle-form.component.html',
    styleUrls: ['./new-vehicle-form.component.scss']
})
export class NewVehicleFormComponent implements OnInit, AfterViewInit {

    loading = false;
    ownersLoaded = false;
    sellersLoaded = false;

    Contract: any;

    form = new FormGroup({});
    model = {
        registration_ID: '',
        brand: '',
        model: '',
        vehicle_docs_id: '',
        price: 0,
        owner: '',
        seller: ''
    };
    fields: FormlyFieldConfig[] = [
        {
            key: 'registration_ID',
            type: 'input',
            templateOptions: {
                label: 'Matricula',
                placeholder: 'Ej: ABC 1234',
                required: true,
            }
        },
        {
            key: 'brand',
            type: 'input',
            templateOptions: {
                label: 'Marca',
                placeholder: 'Ej: Tesla',
                required: true,
            }
        },
        {
            key: 'model',
            type: 'input',
            templateOptions: {
                label: 'Model',
                placeholder: 'Ej: Model 3',
                required: true,
            }
        },
        {
            key: 'vehicle_docs_id',
            type: 'input',
            templateOptions: {
                label: 'Numero de chasis / Identificador papeles',
                placeholder: 'Ej: A1B2C3',
                required: true,
            }
        },
        {
            key: 'price',
            type: 'number',
            templateOptions: {
                label: 'Precio en ether',
                placeholder: 'Ej: 371',
                required: true,
            }
        },
        {
            key: 'owner',
            type: 'select',
            templateOptions: {
                label: 'Direccion del dueño del vehiculo',
                description: 'Seleccione la address del dueño',
                required: true,
                options: [
                    {value: 1, label: 'Option 1'},
                    {value: 2, label: 'Option 2'},
                    {value: 3, label: 'Option 3'},
                    {value: 4, label: 'Option 4'},
                ],
            },
        },
        {
            key: 'add-seller',
            type: 'button-action',
            templateOptions: {
                text: 'Añadir address de dueño',
                onClick: () => {
                    const dialogRef = this.dialog.open(NewOwnerFormComponent, {});
                },
            }
        },
        {
            key: 'seller',
            type: 'select',
            templateOptions: {
                label: 'Direccion del vendedor',
                description: 'Seleccione la address del vendedor',
                required: true,
                options: [
                    {value: 1, label: 'Option 1'},
                    {value: 2, label: 'Option 2'},
                    {value: 3, label: 'Option 3'},
                    {value: 4, label: 'Option 4'},
                ],
            },
        },
        {
            key: 'add-seller',
            type: 'button-action',
            templateOptions: {
                text: 'Añadir address de vendedor',
                onClick: () => {
                    const dialogRef = this.dialog.open(NewSellerFormComponent, {});
                },
            }
        }
    ];

    constructor(public dialog: MatDialog, @Inject(WEB3) private web3: Web3, private snackBar: MatSnackBar, private appRef: ApplicationRef, private settingsService: SettingsService) {
        this.Contract = new this.web3.eth.Contract(JSON.parse(settingsService.ContractABI), settingsService.ContractAddress);
    }

    ngOnInit(): void {

    }

    ngAfterViewInit() {
        this.Contract.methods.getAllAllowedOwners().call({from: this.web3.currentProvider['selectedAddress']}, (error, data) => {
            const options = [];
            data.forEach((address) => {
                options.push({value: address, label: address});
            });
            this.ownersLoaded = true;
            this.fields.find(field => field.key === 'owner').templateOptions.options = options;
            this.appRef.tick();
        });
        this.Contract.methods.getAllAllSellers().call({from: this.web3.currentProvider['selectedAddress']}, (error, data) => {

            const options = [];
            data.forEach((address) => {
                options.push({value: address, label: address});
            });
            this.ownersLoaded = true;
            this.fields.find(field => field.key === 'seller').templateOptions.options = options;

            this.sellersLoaded = true;
            this.appRef.tick();
        });
    }

    onSubmit() {

        this.loading = true;
        const Contract = new this.web3.eth.Contract(JSON.parse(this.settingsService.ContractABI), this.settingsService.ContractAddress);

        const buyNewCar = Contract.methods.buyNewCar(this.model.registration_ID, this.model.brand, this.model.model, this.model.vehicle_docs_id, this.web3.utils.toWei(this.model.price.toString(), 'ether'), this.model.seller, this.model.owner);

        this.web3.eth.getTransactionCount(this.web3.currentProvider['selectedAddress'], (error, txCount) => {
            const tx = {
                nonce: txCount,
                from: this.web3.currentProvider['selectedAddress'],
                to: this.settingsService.ContractAddress,
                gasPrice: this.web3.utils.toWei('10', 'gwei'),
                value: this.web3.utils.toWei(this.model.price.toString()) + '',
                gas: '3000000',
                data: buyNewCar.encodeABI()
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
