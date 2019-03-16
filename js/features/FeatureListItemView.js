export default class FeatureListItemView {

    constructor(name, index, enableDetailsContentFn) {
        this.name = name;
        this.index = index;

        this.id = "feature-" + index;

        console.log(`feature was created ${this.id}`);

        this.enableDetailsContentFn = enableDetailsContentFn;
    }

    changeView() {
        console.log("hallo")
    }

    appendFeature(list) {

        let listItem = document.createElement("li");

        listItem.innerHTML = `
            <a id="${this.id}" href="#">${this.name}</a>
                
        `;
        list.appendChild(listItem);

        this.featureTag = document.querySelector("#" + this.id);

        this.featureTag.onclick = _ => this.enableDetailsContentFn(this.name);
    }
  
}