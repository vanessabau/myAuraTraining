({
    //LOAD ITEMS from Salesforce
    doInit: function(component, event, helper){
      //Create action server request
      let action = component.get("c.getItems");
        
      //Callback behavior for when response is received
      action.setCallback(this, function(response){
      	let state = response.getState();
          if(state === "SUCCESS"){
              component.set("v.items", response.getReturnValue());
          }
          else{
              console.log("Failed with state:" + state);
          }
      });
        
      //Send off to be executed
      $A.enqueueAction(action);
    },
        handleAddItem: function(component, event, helper) {
        let newItem = event.getParam("item");
        helper.addItem(component, newItem);
    },
    	handleUpdateItem: function(component, event, helper) {
        let updatedItem = event.getParam("item");
        helper.updateItem(component, updatedItem);
    }

})
