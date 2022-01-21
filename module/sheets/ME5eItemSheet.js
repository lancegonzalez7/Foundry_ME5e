export default class ME5eItemSheet extends ItemSheet {
    get template() {
        return `systems/Foundry_ME5e/templates/sheets/${this.item.data.type}-sheet.html`;
    }

    getData() {
        const baseData = super.getData();

        let sheetData = {
            owner: this.item.isOwner,
            editable: this.IsEditable,
            item: baseData.item,
            data: baseData.item.data.data,
            config: CONFIG.FOUNDRY_ME5e
        };

        /*data.config = CONFIG.ME5e;*/

        return sheetData;
    }
}