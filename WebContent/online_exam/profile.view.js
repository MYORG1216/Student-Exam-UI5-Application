sap.ui.jsview("online_exam.profile", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf online_exam.profile
	*/ 
	getControllerName : function() {
		return "online_exam.profile";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf online_exam.profile
	*/ 
	createContent : function(oController) {
 		return new sap.m.Page({
 			showHeader:true,
 			customHeader:[
 				new sap.m.Bar({
 					contentRight:[
 						new sap.m.Button({
 							text:"Edit Profile",
 							icon:"sap-icon://edit"
 						})
 					]
 				})
 			],
 			
 			title: "Title",
			content: [
			new sap.m.SplitApp({
			masterPages:[

				new sap.m.Page({
					showHeader:false,	
					content:[
						new sap.m.Image({
						src:"rani.jpg",
						height:"25%",
						width:"100%"
					}),
						
						new sap.m.List({
							width:"100%",
							items:[
								new sap.m.StandardListItem({
									title:"Messages"
								}),
								new sap.m.StandardListItem({
									title:"Basic Details"
								}),
								new sap.m.StandardListItem({
									title:"Interests"
								}),
								new sap.m.StandardListItem({
									title:"Skills"
								}),
								new sap.m.StandardListItem({
									title:"Performance"
								})
								
							]
						})	
					]
				})
				
			],
			detailPages:[
				new sap.m.Text("text",{
					text:"this is detail page"
				})
			]
			
			
			})
			
			]
		});
	}

});