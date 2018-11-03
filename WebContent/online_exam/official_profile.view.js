sap.ui.jsview("online_exam.official_profile", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf online_exam.official_profile
	*/ 
	getControllerName : function() {
		return "online_exam.official_profile";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf online_exam.official_profile
	*/ 
	createContent : function(oController) {
		var oDetails = new sap.ui.model.json.JSONModel({});
		var oView = this;
		var oData = {
				keys:[
					{
						key:"Full Name ",
						value:"Ashok Kumar Kalavakuri"
					},
					
					{
						key:"Nick Name ",
						value:"Nanda"
					},
					{
						key:"Email ",
						value:"ashokkumar799381@gmail.com"
					},
					{
						key:"Mobile Number ",
						value:"6301849944"
					},
					{
						key:"Village ",
						value:"Seetharampuram"
					},
					{
						key:"Mandal ",
						value:"Hanumantuni Padu"
					},
					{
						key:"Pincode ",
						value:"523237"
					},
					{
						key:"District ",
						value:"prakasam"
					},
					{
						key:"State ",
						value:"Andhrapradesh"
					}
				]
		}
		oDetails.setData(oData);
		oView.setModel(oDetails,"Details");
		
		
 		return new sap.m.Page({
 			showHeader:false,
			content: [
				
			new sap.m.Label({
				width:"100%"
			}).addStyleClass("topBar"),
			new sap.m.Label({
				width:"100%"
			}).addStyleClass("bottomBar"),
			new sap.m.Image({
				src:"rani.jpg"	
				}).addStyleClass("profile"),
		    
		    new sap.m.IconTabBar({
		    	items:[
		    		new sap.m.IconTabFilter({
		    			text:"Basic Details",
		    			content:[
		    				new sap.m.List({
		    					width:"40%",
		    					backgroundDesign:sap.m.BackgroundDesign.Transparent,
		    					showSeparator:sap.m.ListSeparators.Inner
		    				}).bindAggregation("items","Details>/keys",new sap.m.StandardListItem({
		    					title:({
		    					parts:[
		    						{path:"Details>key"},
		    						{path:"Details>value"}
		    					],
		    					formatter:function(key,value){
		    						return key+": "+value;
		    					}
		    						
		    					})
		    				})		
		    				).addStyleClass("Details_list"),
		    				
		    				new sap.m.Button({
		    					text:"Edit Details",
		    					icon:"sap-icon://edit"
		    				})
		    			]
		    			
		    		}),
		    		
		    		
		    		new sap.m.IconTabFilter({
		    			text:"Messages",
		    			content:[
		    				
		    				
		    				new sap.m.Button({
		    					text:"Create Message",
		    					press:()=>{
		    						
		    						message.style.display = "block";
		    						oLabel2.style.display = "none";
		    						oLabel3.style.display = "none";

		    					}
		    				}).addStyleClass("messageButtons"),
//		    				
		    				new sap.m.Button({
		    					text:"Inbox",
		    					press:function(){

		    						message.style.display = "none";
		    						oLabel2.style.display = "block";
		    						oLabel3.style.display = "none";
		    						
		    					}
		    				}).addStyleClass("messageButtons"),
//		    				
		    				new sap.m.Button({
		    					text:"Sent Items",
		    					press:function(){
		    						
		    						message.style.display = "none";
		    						oLabel2.style.display = "none";
		    						oLabel3.style.display = "block";
		    						
		    					}
		    				}).addStyleClass("messageButtons"),
//		    				
		    				new sap.m.TextArea("OtextArea",{
		    				}),
		    				
		    				new sap.m.Button({
		    					text:"Send"
		    				}).addStyleClass("send"),
//		    				
		    				new sap.m.Label({
		    					text:"To:"
		    				}).addStyleClass("To"),
//		    				
		    				new sap.m.Input({
		    					width:"30%"
		    				}).addStyleClass("Contact"),
//		    				
		    				new sap.m.Label("message",{
		    					width:"75%"
		    				}).addEventDelegate({
		    				onAfterRendering:function(){
	    				
		    					To = document.getElementsByClassName("To")[0];
		    					message = document.getElementById("message");
		    					message.append(To);
		    					
		    					oSend = document.getElementsByClassName("send")[0];
		    					message.append(oSend);
		    					
		    					oTextArea = document.getElementById("OtextArea");
		    					message.append(oTextArea);
		    					
		    					oContact = document.getElementsByClassName("Contact")[0]
		    					message.append(oContact);
		    					
		    				}	
		    				}),
		    				
		    				
		    				 new sap.m.List("oList2",{
		    					 width:"60%",
	    							items:[
	    								new sap.m.StandardListItem({
	    									title:"first"
	    								}),
	    								new sap.m.StandardListItem({
	    									title:"first"
	    								}),
	    								new sap.m.StandardListItem({
	    									title:"first"
	    								}),
	    								new sap.m.StandardListItem({
	    									title:"first"
	    								}),
	    								new sap.m.StandardListItem({
	    									title:"first"
	    								}),
	    								new sap.m.StandardListItem({
	    									title:"first"
	    								}),
	    								new sap.m.StandardListItem({
	    									title:"first"
	    								})
	    							]
	    						}),
	    						
	    						new sap.m.Button("Delete",{
	    							text:"Delete"
	    						}),
	    						
	    						new sap.m.Label("oLabel2",{
			    				}).addEventDelegate({
			    					onAfterRendering:function(){
			    					
			    						oList = document.getElementById("oList2");
			    						oLabel2 = document.getElementById("oLabel2");
			    						oLabel2.append(oList);
			    						
			    						oDelete = document.getElementById("Delete");
			    						oLabel2.append(oDelete);
			    						
			    						
			    					}
			    				}),
			    				
			    				
			    				
			    				//list
			    				 new sap.m.List("oList3",{
			    					 width:"60%",
		    							items:[
		    								new sap.m.StandardListItem({
		    									title:"first"
		    								}),
		    								new sap.m.StandardListItem({
		    									title:"first"
		    								}),
		    								new sap.m.StandardListItem({
		    									title:"first"
		    								}),
		    								new sap.m.StandardListItem({
		    									title:"first"
		    								}),
		    								new sap.m.StandardListItem({
		    									title:"first"
		    								}),
		    								new sap.m.StandardListItem({
		    									title:"first"
		    								}),
		    								new sap.m.StandardListItem({
		    									title:"first"
		    								})
		    							]
		    						}),
		    						new sap.m.Button("sDelete",{
		    							text:"Delete"
		    						}),
			    	
		    						new sap.m.Label("oLabel3",{
				    					
				    				}).addEventDelegate({
				    					onAfterRendering:function(){
					    					
				    						oList3 = document.getElementById("oList3");
				    						oLabel3 = document.getElementById("oLabel3");
				    						oLabel3.append(oList3);
				    						
				    					    sDelete = document.getElementById("sDelete");
				    					    oLabel3.append(sDelete);
				    						
				    						
				    					}
				    				})
		    				
		    			]
		    		}),
		    		
		    		new sap.m.IconTabFilter({
		    			text:"Skills",
		    			content:[
		    				new sap.m.List("oSkills",{
		    					 width:"60%",
	    							items:[
	    								new sap.m.StandardListItem({
	    									title:"first"
	    								}),
	    								new sap.m.StandardListItem({
	    									title:"first"
	    								}),
	    								new sap.m.StandardListItem({
	    									title:"first"
	    								}),
	    								new sap.m.StandardListItem({
	    									title:"first"
	    								}),
	    								new sap.m.StandardListItem({
	    									title:"first"
	    								}),
	    								new sap.m.StandardListItem({
	    									title:"first"
	    								}),
	    								new sap.m.StandardListItem({
	    									title:"first"
	    								})
	    							]
	    						})	
		    				
		    			]
		    		}),
		    		new sap.m.IconTabFilter({
		    			text:"Performance",
		    			content:[
		    				
		    			]
		    		})
		    		
		    	]
		    })
			
			]
		});
	}

});