export default class TabsView {
    constructor() {
        console.log("initialized");      
    }

    setFeaturesView(tabConetentFeaturesView) {
        this.featuresButton = document.querySelector("#featuresButton")
        this.featuresButton.onclick = _ => this.tabConetentFeaturesView.changeView();
        this.tabConetentFeaturesView = tabConetentFeaturesView;
    }
}