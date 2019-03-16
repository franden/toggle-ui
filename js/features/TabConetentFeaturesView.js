
import DataFetscher from './../control/DataFetscher.js';
import FeatureListItemView from './FeatureListItemView.js';

export default class TabConetentFeaturesView {

    getHtmlElement() {
       return document.querySelector("#tabContent")
    }

    
    changeView() {
        this.tabContent = this.getHtmlElement();

        console.log("changeView called");

        let featuresUrl = "http://localhost:3000/toggles/features";

        new DataFetscher().fetchJsonData(featuresUrl, (jsonResonse) => {
            let features = jsonResonse;
    
            console.debug("Features were retrieved: " + features);
    
            let list = document.createElement('ul');
            tabContent.appendChild(list)
            
            features.forEach(function (singleFeature, index, array) {
                let feature = new FeatureListItemView(singleFeature, index)
                feature.appendFeature(list);
            });
    
        });     

        console.log("changeView end");
    }
}