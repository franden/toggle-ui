import TabConetentFeaturesView from './features/TabConetentFeaturesView.js';
import TabConetentDetailsView from './details/TabConetentDetailsView.js';

export default class TabsView {
    constructor() {
        console.log("initialized");

        this.tabConetentFeaturesView = new TabConetentFeaturesView();
        this.tabConetentFeaturesView.setEnableDetailsContentFn(this.enableDetailsContent.bind(this))
        this.tabConetentDetailsView = new TabConetentDetailsView();
        this.enableFeaturesConetent();
    }  

    enableFeaturesConetent() {       
        this.featuresButton = document.querySelector("#featuresButton")
        
        this.featuresButton.onclick = _ => this.onClickFetures();     
    }

    onClickFetures() {
        this.tabConetentFeaturesView.enable()
        this.deactivateAllButtons();
        this.featuresButton.setAttribute("class", "tablinks active");
    }

    enableDetailsContent(featureId) {
        
        this.deactivateAllButtons();
        let featuresDetail = document.querySelector("#featureDetail");
        featuresDetail.setAttribute("style", "visibility:visible");
        featuresDetail.setAttribute("class", "tablinks active");
        
        featuresDetail.innerHTML = featureId;

        new TabConetentDetailsView().enable(featureId);    
    }   

    deactivateAllButtons() {
        let featuresButton = document.querySelector("#featuresButton")
        featuresButton.setAttribute("class", "tablinks");

        let featuresDetail = document.querySelector("#featureDetail");
        featuresDetail.setAttribute("class", "tablinks");
    }
}