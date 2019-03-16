export default class FeatureListItemView {

    constructor(id, description, index, enableDetailsContentFn) {
        this.id = id;
        this.description = description;
        this.index = index;

        this.linkId = "feature-" + id;

        console.log(`feature was created ${this.id}`);

        this.enableDetailsContentFn = enableDetailsContentFn;
    }

    changeView() {
        console.log("hallo")
    }

    appendFeature(list) {

        let listItem = document.createElement("li");

        listItem.innerHTML = `
            <a id="${this.linkId}" href="#">${this.id} - ${this.description}</a>
                
        `;
        list.appendChild(listItem);

        this.featureTag = document.querySelector("#" + this.linkId);

        this.featureTag.onclick = _ => this.enableDetailsContentFn(this.id, this.description);
    }
  
}