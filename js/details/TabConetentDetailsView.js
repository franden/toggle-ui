
import DataFetscher from './../control/DataFetscher.js';

export default class TabConetentDetailsView {

    enable(featureId) {
          
        this.tabContent =  document.querySelector("#tabContent")

        this.tabContent.innerHTML =`<p>details for feature ${featureId}`;
        
        let featuresUrl = "http://localhost:3000/toggles/features/"+this.featureId;

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
        
    }
}