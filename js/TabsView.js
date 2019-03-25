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
        this.featuresButton.setAttribute("class", "nav-link active");
    }

    enableDetailsContent(id, description) {
        
        this.deactivateAllButtons();
        let featuresDetail = document.querySelector("#featureDetail");
        featuresDetail.setAttribute("style", "visibility:visible");
        featuresDetail.setAttribute("class", "nav-link active");
        
        featuresDetail.innerHTML = description;

        new TabConetentDetailsView().enable(id);    
    }   

    deactivateAllButtons() {
        
        let featuresButton = document.querySelector("#featuresButton")
        featuresButton.setAttribute("class", "nav-link");

        let featuresDetail = document.querySelector("#featureDetail");
        featuresDetail.setAttribute("style", "visibility:hidden");
        featuresDetail.setAttribute("class", "nav-link");
        
    }
}