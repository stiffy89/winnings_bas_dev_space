sap.ui.define([
	"sap/m/MessageToast",
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function (MessageToast, Controller, JSONModel) {
	"use strict";

	return Controller.extend("ns.custom_tabulator.Card", {
		onInit: function () {
		
		},
		renderDemoTable: function () {
			new Tabulator('#demoTable', {
				pagination: 'local',
				paginationSize: 20,
				data: [
					{
						carrid: "0001",
						price: "1500.00",
						currency: 'USD',
						plane: "united airways"
					},
					{
						carrid: "0002",
						price: "20000.00",
						currency: 'USD',
						plane: "delta"
					},
					{
						carrid: "0003",
						price: "3000.00",
						currency: 'USD',
						plane: "southwest airlines"
					}
				],
				layout: "fitColumns",
				columns: [
					{ title: "Carrier ID", field: "carrid" },
					{ title: "Price", field: "price" },
					{ title: "Currency", field: "currency" },
					{ title: "Plane", field: "plane" },
				]
			});
		}
	});
});