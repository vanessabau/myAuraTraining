({
	clickPacked: function(component, event, helper) {
        //Get item that changed
        let item = component.get("v.item");
        //Create an event called updateItem
        let updateEvent = component.getEvent("updateItem");
        //Packages item into the event
        updateEvent.setParams({ "item": item });
        //Fires the event
        updateEvent.fire();
    }
})
