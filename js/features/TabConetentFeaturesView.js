
import DataFetscher from './../control/DataFetscher.js';
import FeatureListItemView from './FeatureListItemView.js';

export default class TabConetentFeaturesView {

    setEnableDetailsContentFn(enableDetailsContentFn) {
        this.enableDetailsContentFn = enableDetailsContentFn;
    }


    enable() {
        this.tabContent = document.querySelector("#tabContent");
        this.tabContent.innerHTML = "";

        console.log("changeView called");

        let featuresUrl = "http://localhost:3000/toggles/features";

        new DataFetscher().fetchJsonData(featuresUrl, (jsonResonse) => {
            try {

                let features = jsonResonse;

                console.debug("Features were retrieved: " + features);
                let enableDetailsContentFn = this.enableDetailsContentFn;
                let list = document.createElement('ul');
                list.setAttribute("class", "list-group");
                tabContent.appendChild(list);

                features.forEach(function (singleFeature, index, array) {
                    let feature = new FeatureListItemView(singleFeature.id, singleFeature.description, index, enableDetailsContentFn);
                    feature.appendFeature(list);
                });
            }
            catch (e) {
                console.log(e);
            }

        });

        console.log("changeView end");
    }
}