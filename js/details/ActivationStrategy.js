export default class ActivationStrategy {
    constructor(name, enabledArray) {
        this.name = name;
        this.enabledArray = enabledArray;
    }

    append(parentNode) {

        let enabledArray = this.enabledArray;

        const markup = `
        <details class ='tile'>
        <summary>${this.name}</summary>
            <ul class="list">            
                ${enabledArray.map(element =>
            `<li>${element}</li>`
        ).join('')}
            </ul>
        </details>
        `;

        parentNode.innerHTML += markup;
    }
}