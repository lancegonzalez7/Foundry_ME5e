import ME5eItemSheet from "../../modules/sheets/ME5eItemSheet";

Hooks.once("init", function(){
    console.log("ME5e | Initializing ME5e System");

    ME5eItemSheet.unregisterSheet("core", ItemSheet);
    ME5eItemSheet.registerSheet("ME5e",ME5eItemSheet, {makeDefault: true});

})