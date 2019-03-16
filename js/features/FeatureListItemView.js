export default class FeatureListItemView {

    constructor(name, index) {
        this.name = name;
        this.index = index;

        this.id = "feature-" + index;
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

        this.featureTag.onclick = _ => this.showFeatureDetails(this.name);
    }

    showFeatureDetails(feature) {
        let featuresDetail = document.querySelector("#featureDetail");
        featuresDetail.setAttribute("style", "visibility:visible");
        featuresDetail.setAttribute("class", "active");
        
        featuresDetail.innerHTML = feature;
        featuresDetail.click();
    }
}