import DataFetscher from './control/DataFetscher.js';
import Feature from './features/entity/Feature.js';

class FeaturesView {
    constructor() {
        console.log("initialized");
        this.featuresButton = document.querySelector("#featuresButtun")
        this.featuresButton.onclick = _ => this.changeView();
    }


    changeView() {
        this.tabContent = document.querySelector("#tabContent")

        console.log("changeView called");

        let featuresUrl = "http://localhost:3000/toggles/features";

        new DataFetscher().fetchJsonData(featuresUrl, (jsonResonse) => {
            let features = jsonResonse;
    
            console.debug("Features were retrieved: " + features);
    
            let innerHtml = "<ul>";
            features.forEach(function (singleFeature, index, array) {

                let feature = new Feature()
                feature.setName(singleFeature);
                innerHtml += feature.getHtml();
            });
            innerHtml += "<ul>";
    
            tabContent.innerHTML = innerHtml;
        });     

        console.log("changeView end");
    }
}

new FeaturesView();