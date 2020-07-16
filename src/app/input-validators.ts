import {FormControl, ValidationErrors} from '@angular/forms';

export function EthereumAddressValidator(control: FormControl): ValidationErrors {
    return /^0x[a-fA-F0-9]{40}$/.test(control.value) ? null : { eth_address: true };
}
