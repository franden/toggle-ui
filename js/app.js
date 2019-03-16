import TabsView from './TabsView.js';
import TabConetentFeaturesView from './features/TabConetentFeaturesView.js';

class Application {
    constructor() {

        let tabsView = new TabsView()
        let tabConetentFeaturesView = new TabConetentFeaturesView();
        tabsView.setFeaturesView(tabConetentFeaturesView);
    }
}

new Application();