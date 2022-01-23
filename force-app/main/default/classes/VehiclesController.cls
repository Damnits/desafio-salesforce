public with sharing class VehiclesController {
    
    @AuraEnabled(cacheable=true)
    public static List<Vehicle__c> getVehicles() {
        return [
            SELECT 
            Name, 
            Model__c, 
            Air_Conditioner__c, 
            Type__c 
            FROM Vehicle__c ];
    }
}
