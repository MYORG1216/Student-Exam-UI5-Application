sap.ui.jsview("online_exam.select_exam", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf online_exam.select_exam
	*/ 
	getControllerName : function() {
		return "online_exam.select_exam";
	},
	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf online_exam.select_exam
	*/ 
	createContent : function(oController) {
 		return new sap.m.Page({
			title: "Title",
			content: [
			new sap.m.IconTabBar({
				expandable:true,
				items:[
					new sap.m.IconTabFilter({
						text:"Available Exams",
						content:[
							
							new sap.m.TileContainer({
								tiles:[
									new sap.m.StandardTile({
										title:"Aptitude",
										info:"Max.Marks:20",
										number:"total:10",
										//icon:"sap-icon://time-account",
										numberUnit:"time:1hr"
									}),
									new sap.m.StandardTile({
										title:"Reasoning",
										info:"Max.Marks:30",
										number:"total:20",
										numberUnit:"time:30min"
									}),
									new sap.m.StandardTile({
										title:"Java",
										info:"Max.Marks:15",
										number:"total:30",
										numberUnit:"time:35min"
									}),
									new sap.m.StandardTile({
										title:"UI5",
										info:"Max.Marks:25",
										number:"total:30",
										numberUnit:"time:40min"
									}),
									new sap.m.StandardTile({
										title:"Abap",
										info:"Max.Marks:30",
										number:"total:35",
										numberUnit:"time:40min"
									})
									
								]
							}).addStyleClass("exams")
							
							
								]
							}),
						
					new sap.m.IconTabFilter({
						text:"Create Your Exam",
						content:[
							
							new sap.ui.layout.form.Form({
								layout: new sap.ui.layout.form.ResponsiveGridLayout({}),
								editable:true,
								width:"25%",
								formContainers:[
									new sap.ui.layout.form.FormContainer({
										
										formElements:[
											new sap.ui.layout.form.FormElement({
										label:"UserName",
											
										fields:[
											new sap.m.Input({
											width:"70%"
										      })   
										       ]
									         }),
									
									
									new sap.ui.layout.form.FormElement({
										label:"License key",
											
										fields:[
											new sap.m.Input({
												width:"70%"
										      })
										       ]
									}),
									
									new sap.ui.layout.form.FormElement({
											
										fields:[
											new sap.m.Button({
												text:"Submit",
												width:"24%"
											})
											]
									}),
									new sap.ui.layout.form.FormElement({
										
										fields:[
											new sap.m.Button("request",{
												text:"Send Request to License Key",
												width:"70%",
												icon:"sap-icon://technical-object"
											})
											]
									})
									 
									
									
											]
									})
									]
							})
							
							
							
							
							
						]
					}),
					
					
					new sap.m.IconTabFilter({
						text:"Notifications",
						content:[
						new sap.m.List({
							items:[
								new sap.m.StandardListItem({
									title:"1.Aptitude Test will Conduct at Tomorrow",
									info:"31-10-2018"
								}),
								new sap.m.StandardListItem({
									title:"2.Ui5 guys dont have exam Today",
									info:"1-10-2018"
								})
							],
							width:"80%"
						})
						]
						
					})
					
				]	
			})
			],
			customHeader:new sap.m.Bar({
				contentRight:[
					new sap.m.Button({
						text:"Profile",
						icon:"sap-icon://personnel-view",
						
					})
				],
				contentLeft:[
					new sap.m.Label({
						text:"Ashok Kumar Welcome to  Exam world!"
					}).addStyleClass("label")
				]
			})
		});
	}

});