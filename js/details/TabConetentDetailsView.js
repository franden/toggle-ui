
import DataFetscher from './../control/DataFetscher.js';
import ActivationStrategy from './ActivationStrategy.js';

export default class TabConetentDetailsView {

    enable(featureId) {
        try {

            this.tabContent = document.querySelector("#tabContent")

            this.tabContent.innerHTML = `<h2>Details for feature ${featureId}</h2>`;

            let url = "http://localhost:3000/toggles/features/" + featureId;

            new DataFetscher().fetchJsonData(url, (jsonResponse) => {
                let activationStrategies = jsonResponse.activationStrategies;

                activationStrategies.forEach(function (activationStrategy, index, array) {
                    let view = new ActivationStrategy(activationStrategy.name, activationStrategy.enabled)
                    view.append(tabContent);
                });

            });
        }
        catch (e) {
            console.log(e);
        }


    }
}