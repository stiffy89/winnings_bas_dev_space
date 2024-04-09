sap.ui.define([
	"sap/m/MessageToast",
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function (MessageToast, Controller, JSONModel) {
	"use strict";

	return Controller.extend("ns.create_order.Card", {
		onInit: function () {
			
		},
		nextSection: function (e) {
			//move to the next of the form
			let oController = this;
			let oButton = e.getSource();
			let sButtonText = oButton.getText();
			if (sButtonText == "Next"){
				let oFirstFormSection = oController.byId('formFirstSection');
				oFirstFormSection.setVisible(false);

				let oSecondFormSection = oController.byId('formSecondSection');
				oSecondFormSection.setVisible(true);

				oButton.setText('Create Order');

				let oBackButton = oController.byId('backButton');
				oBackButton.setVisible(true);
			}
			else if (sButtonText="Create Order"){
				oController.previousSection();
			}
			
		},
		previousSection: function (e) {
			//move to the previous section
			let oController = this;
			let oNextButton = oController.byId('nextButton');

			if (e) {
				let oBackButton = e.getSource();
				oBackButton.setVisible(false);
			} else {
				let oBackButton = oController.byId('backButton');
				oBackButton.setVisible(false);
			}

			oNextButton.setText("Next");

			let oFirstFormSection = oController.byId('formFirstSection');
			oFirstFormSection.setVisible(true);

			let oSecondFormSection = oController.byId('formSecondSection');
			oSecondFormSection.setVisible(false);
		}
	});
});