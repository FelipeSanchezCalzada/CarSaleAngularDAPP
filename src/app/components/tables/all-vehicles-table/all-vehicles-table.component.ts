import {ApplicationRef, Component, Inject, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {Vehicle} from '../../../model/interfaces/vehicle';
import {WEB3} from '../../../web3';
import Web3 from 'web3';
import {MatSnackBar} from '@angular/material/snack-bar';
import BigNumber from 'bignumber.js';
import {SettingsService} from '../../../services/settings.service';


@Component({
    selector: 'app-all-vehicles-table',
    templateUrl: './all-vehicles-table.component.html',
    styleUrls: ['./all-vehicles-table.component.scss']
})
export class AllVehiclesTableComponent implements OnInit {

    displayedColumns: string[] = ['owner', 'registration_ID', 'brand', 'model', 'vehicle_docs_id', 'price', 'seller'];
    dataSource: MatTableDataSource<Vehicle>;

    @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
    @ViewChild(MatSort, {static: true}) sort: MatSort;

    Contract: any;
    vehicles: Vehicle[] = [];

    constructor(@Inject(WEB3) private web3: Web3, private snackBar: MatSnackBar, private appRef: ApplicationRef, private settingsService: SettingsService) {
        this.dataSource = new MatTableDataSource(this.vehicles);
        this.Contract = new this.web3.eth.Contract(JSON.parse(this.settingsService.ContractABI), settingsService.ContractAddress);
        this.Contract.methods.getAllAllowedOwners().call({from: this.web3.currentProvider['selectedAddress']}, (error, data) => {

            data.forEach((address) => {
                // tslint:disable-next-line:max-line-length
                this.Contract.methods.getVehicles(address).call({from: this.web3.currentProvider['selectedAddress']}, (error2, vehicles) => {
                    vehicles.forEach((vehicle_array) => {
                        this.vehicles.push({
                            registration_ID: vehicle_array[0],
                            brand: vehicle_array[1],
                            model: vehicle_array[2],
                            vehicle_docs_id: vehicle_array[3],
                            price: parseFloat(this.web3.utils.fromWei(vehicle_array[4], 'ether')),
                            seller: vehicle_array[5],
                            owner: address
                        });
                    });
                    this.dataSource = new MatTableDataSource(this.vehicles);
                    this.appRef.tick();
                });
            });
        });


        // Assign the data to the data source for the table to render

    }

    ngOnInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }

    applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();

        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }
}
