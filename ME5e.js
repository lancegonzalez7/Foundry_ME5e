import ME5eItemSheet from "./module/sheets/ME5eItemSheet.js";

Hooks.once("init", function() {
    console.log("ME5e | Initializing ME5e System");

    Items.unregisterSheet("core", ItemSheet);
    Items.registerSheet("ME5e", ME5eItemSheet, {makeDefault: true});

});