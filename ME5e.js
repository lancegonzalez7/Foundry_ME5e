import { ME5e } from "./module/config.js";
import ME5eItemSheet from "./module/sheets/ME5eItemSheet.js";

Hooks.once("init", function() {
    console.log("ME5e | Initializing ME5e System");

    CONFIG.Foundry_ME5e = ME5e;

    Items.unregisterSheet("core", ItemSheet);
    Items.registerSheet("Foundry_ME5e", ME5eItemSheet, {makeDefault: true});

});s