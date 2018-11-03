sap.ui.jsview("online_exam.login", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf online_exam.login
	*/ 
	getControllerName : function() {
		return "online_exam.login";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf online_exam.login
	*/ 
	createContent : function(oController) {
		
		var oForm2=new sap.ui.layout.form.Form({
			layout: new sap.ui.layout.form.ResponsiveGridLayout({}),
			editable:true,
			width:"25%",
			formContainers:[
				new sap.ui.layout.form.FormContainer({
					
					formElements:[
						new sap.ui.layout.form.FormElement({
					label:"UserName",
						
					fields:[
						new sap.m.Input("Id1",{
						width:"65%"
					      })   
					       ]
				         }),
				
				
				new sap.ui.layout.form.FormElement({
					label:"Password",
						
					fields:[
						new sap.m.Input("Name1",{
							width:"65%"
					      })
					       ]
				}),
				
				new sap.ui.layout.form.FormElement({
						
					fields:[
						new sap.m.Button({
							text:"Submit",
							width:"27%",
							press:()=>{
								
								oXHROptions = {"Address":{"Id":"1","Village":"puram","Mandal":"H.M","pin":"52"}};
								xhr = new XMLHttpRequest();
								url= "http://gicomsap16.gicom.local:8000/gicom/jsonHandler/Z1135CREATE?format=json&case=C";
								xhr.open("POST", url, true);
								xhr.setRequestHeader("Authorization", "Basic QU1CSFU6anJ0QDE5OTI=");
								xhr.setRequestHeader("Content-Type", "application/json");
								xhr.setRequestHeader("X-Stateful", "stateful");
								oXHROptions = JSON.stringify(oXHROptions);
								debugger;
								xhr.send(oXHROptions);
								
								xhr.onload = function() {
	                            	 if (xhr.readyState === 4) {
	                            		 if (xhr.status === 200) {
	                            			 console.log(xhr.response);
	                            		 } else {
	                            			 debugger;
	                            		 }
	                            	 }
	                             }	
							}
							
						}).addStyleClass("submit")
					       ]
				})
					       
				
				]
				})
				]
		}).addStyleClass("form");
		
 		return new sap.m.Page({
			content: [
				oForm2,
				new sap.m.Button("register",{
					text:"Click Here To Register",
					width:"25%"
				})
			]
		}).addStyleClass("login");
	}

});