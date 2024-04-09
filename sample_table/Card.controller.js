sap.ui.define([
	"sap/m/MessageToast",
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function (MessageToast, Controller, JSONModel) {
	"use strict";

	return Controller.extend("ns.sample_table.Card", {
		onInit: function () {
			var oModel = new JSONModel([
					{
						"ShipmentID": "12241",
						"ExternalID": "PO1239041",
						"EstArrivalDate": "14/12/2022",
						"Facility": "VIC"
					},
					{
						"ShipmentID": "12240",
						"ExternalID": "PO1239040",
						"EstArrivalDate": "14/12/2022",
						"Facility": "VIC"
					},
					{
						"ShipmentID": "12245",
						"ExternalID": "PO1239045",
						"EstArrivalDate": "14/12/2022",
						"Facility": "VIC"
					}
			]);

			this.getView().setModel(oModel);
		}
	});
});