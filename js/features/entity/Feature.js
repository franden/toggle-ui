export default class Feature {

    setName(name) {
        this.name = name;
    }

    getHtml() {
        return `

        <li><a href="#" onclick="showFeatureDetail()">${this.name}<a></li>
        
        `;
    }

    showFeatureDetail() {
        console.log("hallo")
    }
 }