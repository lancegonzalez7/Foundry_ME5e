export default class ME5eItemSheet extends ItemSheet {
    get template() {
        return `systems/Foundry_ME5e/templates/sheets/${this.item.data.type}-sheet.html`;
    }

    getData() {
        const data = super.getData();

        data.config = CONFIG.ME5e;

        return data;
    }
}