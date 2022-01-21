export default class ME5eItemSheet extends ItemSheet {
    get template() {
        return `systems/Foundry_ME5e/templates/sheets/${this.item.data.type}-sheet.html`;
    }
}