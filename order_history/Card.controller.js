sap.ui.define([
	"sap/m/MessageToast",
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function (MessageToast, Controller, JSONModel) {
	"use strict";

	return Controller.extend("ns.order_history.Card", {
		onInit: function () {
			var oModel = new JSONModel([
				{
					"ID": "WSSO14441",
					"ExternalID": "PO1239041",
					"ShippingCustomerName" : "John Doe",
					"RequestedDeliveryDate": "14/12/2022",
					"Facility": "VIC",
					"Status" : "Delivered"
				},
				{
					"ID": "WSSO14441",
					"ExternalID": "PO1239041",
					"ShippingCustomerName" : "John Doe",
					"RequestedDeliveryDate": "15/12/2022",
					"Facility": "VIC",
					"Status" : "Delivered"
				},
				{
					"ID": "WSSO14441",
					"ExternalID": "PO1239041",
					"ShippingCustomerName" : "Sam Smith",
					"RequestedDeliveryDate": "16/12/2022",
					"Facility": "VIC",
					"Status" : "Delivered"
				},
				{
					"ID": "WSSO14441",
					"ExternalID": "PO1239041",
					"ShippingCustomerName" : "Sam Smith",
					"RequestedDeliveryDate": "17/12/2022",
					"Facility": "VIC",
					"Status" : "Delivered"
				},
				{
					"ID": "WSSO14441",
					"ExternalID": "PO1239041",
					"ShippingCustomerName" : "Sam Smith",
					"RequestedDeliveryDate": "18/12/2022",
					"Facility": "VIC",
					"Status" : "Delivered"
				}				
			]);
			
			this.getView().setModel(oModel);
		}
	});
});