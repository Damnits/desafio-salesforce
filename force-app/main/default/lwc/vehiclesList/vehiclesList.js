import { LightningElement, track, wire } from 'lwc';
import getVehicles from "@salesforce/apex/VehiclesController.getVehicles";


const columns = [
    { label: 'Marca', fieldName: 'Name' },
    { label: 'Modelo do veículo', fieldName: 'Model__c' },
    { label: 'Ar condicionado', fieldName: 'Air_Conditioner__c' },
    { label: 'Tipo', fieldName: 'Type__c' },
  ];
export default class VehiclesList extends LightningElement {

    columns = columns;
    @track vehiclesList;

    @wire( getVehicles)
    vehicles({data, error}){
        if(data){
            this.vehiclesList = data;
            console.log('Retorno', JSON.stringify(data));
        } else if(error){
            console.error(error);
        }
    }

}