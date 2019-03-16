import TabConetentFeaturesView from './features/TabConetentFeaturesView.js';
import TabConetentDetailsView from './details/TabConetentDetailsView.js';

export default class TabsView {
    constructor() {
        console.log("initialized");
        this.enableFeaturesConetent();
    }  

    enableFeaturesConetent() {
        let tabConetentFeaturesView = new TabConetentFeaturesView();
        this.featuresButton = document.querySelector("#featuresButton")
        this.featuresButton.onclick = _ => tabConetentFeaturesView.changeView();
        this.tabConetentFeaturesView = tabConetentFeaturesView;
    }

    enableDetailsContent(featureId) {
        new TabConetentDetailsView(featureId).enebale();
    }

}