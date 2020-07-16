
export const ABIContract = '[\n' +
    '\t{\n' +
    '\t\t"inputs": [\n' +
    '\t\t\t{\n' +
    '\t\t\t\t"internalType": "address",\n' +
    '\t\t\t\t"name": "_addr",\n' +
    '\t\t\t\t"type": "address"\n' +
    '\t\t\t}\n' +
    '\t\t],\n' +
    '\t\t"name": "addNewAllowedOwner",\n' +
    '\t\t"outputs": [],\n' +
    '\t\t"stateMutability": "nonpayable",\n' +
    '\t\t"type": "function"\n' +
    '\t},\n' +
    '\t{\n' +
    '\t\t"inputs": [\n' +
    '\t\t\t{\n' +
    '\t\t\t\t"internalType": "address",\n' +
    '\t\t\t\t"name": "_addr",\n' +
    '\t\t\t\t"type": "address"\n' +
    '\t\t\t}\n' +
    '\t\t],\n' +
    '\t\t"name": "addNewSeller",\n' +
    '\t\t"outputs": [],\n' +
    '\t\t"stateMutability": "nonpayable",\n' +
    '\t\t"type": "function"\n' +
    '\t},\n' +
    '\t{\n' +
    '\t\t"inputs": [\n' +
    '\t\t\t{\n' +
    '\t\t\t\t"internalType": "string",\n' +
    '\t\t\t\t"name": "_registration_ID",\n' +
    '\t\t\t\t"type": "string"\n' +
    '\t\t\t},\n' +
    '\t\t\t{\n' +
    '\t\t\t\t"internalType": "string",\n' +
    '\t\t\t\t"name": "_brand",\n' +
    '\t\t\t\t"type": "string"\n' +
    '\t\t\t},\n' +
    '\t\t\t{\n' +
    '\t\t\t\t"internalType": "string",\n' +
    '\t\t\t\t"name": "_model",\n' +
    '\t\t\t\t"type": "string"\n' +
    '\t\t\t},\n' +
    '\t\t\t{\n' +
    '\t\t\t\t"internalType": "string",\n' +
    '\t\t\t\t"name": "_vehicle_docs_id",\n' +
    '\t\t\t\t"type": "string"\n' +
    '\t\t\t},\n' +
    '\t\t\t{\n' +
    '\t\t\t\t"internalType": "uint256",\n' +
    '\t\t\t\t"name": "_price",\n' +
    '\t\t\t\t"type": "uint256"\n' +
    '\t\t\t},\n' +
    '\t\t\t{\n' +
    '\t\t\t\t"internalType": "address",\n' +
    '\t\t\t\t"name": "_seller",\n' +
    '\t\t\t\t"type": "address"\n' +
    '\t\t\t},\n' +
    '\t\t\t{\n' +
    '\t\t\t\t"internalType": "address",\n' +
    '\t\t\t\t"name": "_vehicle_owner",\n' +
    '\t\t\t\t"type": "address"\n' +
    '\t\t\t}\n' +
    '\t\t],\n' +
    '\t\t"name": "buyNewCar",\n' +
    '\t\t"outputs": [],\n' +
    '\t\t"stateMutability": "payable",\n' +
    '\t\t"type": "function"\n' +
    '\t},\n' +
    '\t{\n' +
    '\t\t"inputs": [],\n' +
    '\t\t"stateMutability": "nonpayable",\n' +
    '\t\t"type": "constructor"\n' +
    '\t},\n' +
    '\t{\n' +
    '\t\t"inputs": [],\n' +
    '\t\t"name": "getAllAllowedOwners",\n' +
    '\t\t"outputs": [\n' +
    '\t\t\t{\n' +
    '\t\t\t\t"internalType": "address[]",\n' +
    '\t\t\t\t"name": "",\n' +
    '\t\t\t\t"type": "address[]"\n' +
    '\t\t\t}\n' +
    '\t\t],\n' +
    '\t\t"stateMutability": "view",\n' +
    '\t\t"type": "function"\n' +
    '\t},\n' +
    '\t{\n' +
    '\t\t"inputs": [],\n' +
    '\t\t"name": "getAllAllSellers",\n' +
    '\t\t"outputs": [\n' +
    '\t\t\t{\n' +
    '\t\t\t\t"internalType": "address[]",\n' +
    '\t\t\t\t"name": "",\n' +
    '\t\t\t\t"type": "address[]"\n' +
    '\t\t\t}\n' +
    '\t\t],\n' +
    '\t\t"stateMutability": "view",\n' +
    '\t\t"type": "function"\n' +
    '\t},\n' +
    '\t{\n' +
    '\t\t"inputs": [\n' +
    '\t\t\t{\n' +
    '\t\t\t\t"internalType": "address",\n' +
    '\t\t\t\t"name": "_addr",\n' +
    '\t\t\t\t"type": "address"\n' +
    '\t\t\t}\n' +
    '\t\t],\n' +
    '\t\t"name": "getVehicles",\n' +
    '\t\t"outputs": [\n' +
    '\t\t\t{\n' +
    '\t\t\t\t"components": [\n' +
    '\t\t\t\t\t{\n' +
    '\t\t\t\t\t\t"internalType": "string",\n' +
    '\t\t\t\t\t\t"name": "registration_ID",\n' +
    '\t\t\t\t\t\t"type": "string"\n' +
    '\t\t\t\t\t},\n' +
    '\t\t\t\t\t{\n' +
    '\t\t\t\t\t\t"internalType": "string",\n' +
    '\t\t\t\t\t\t"name": "brand",\n' +
    '\t\t\t\t\t\t"type": "string"\n' +
    '\t\t\t\t\t},\n' +
    '\t\t\t\t\t{\n' +
    '\t\t\t\t\t\t"internalType": "string",\n' +
    '\t\t\t\t\t\t"name": "model",\n' +
    '\t\t\t\t\t\t"type": "string"\n' +
    '\t\t\t\t\t},\n' +
    '\t\t\t\t\t{\n' +
    '\t\t\t\t\t\t"internalType": "string",\n' +
    '\t\t\t\t\t\t"name": "vehicle_docs_id",\n' +
    '\t\t\t\t\t\t"type": "string"\n' +
    '\t\t\t\t\t},\n' +
    '\t\t\t\t\t{\n' +
    '\t\t\t\t\t\t"internalType": "uint256",\n' +
    '\t\t\t\t\t\t"name": "price",\n' +
    '\t\t\t\t\t\t"type": "uint256"\n' +
    '\t\t\t\t\t},\n' +
    '\t\t\t\t\t{\n' +
    '\t\t\t\t\t\t"internalType": "address",\n' +
    '\t\t\t\t\t\t"name": "seller",\n' +
    '\t\t\t\t\t\t"type": "address"\n' +
    '\t\t\t\t\t}\n' +
    '\t\t\t\t],\n' +
    '\t\t\t\t"internalType": "struct Prueba.Vehicle[]",\n' +
    '\t\t\t\t"name": "",\n' +
    '\t\t\t\t"type": "tuple[]"\n' +
    '\t\t\t}\n' +
    '\t\t],\n' +
    '\t\t"stateMutability": "view",\n' +
    '\t\t"type": "function"\n' +
    '\t}\n' +
    ']';



