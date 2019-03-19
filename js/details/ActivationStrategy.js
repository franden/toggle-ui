export default class ActivationStrategy {
    constructor(name, enabledArray) {
        this.name = name;
        this.enabledArray = enabledArray;
    }

    append(parentNode) {

        let enabledArray = this.enabledArray;

        const markup = `
        <section class ='tile'>
        <p>${this.name}</p>
            <ul class="list">            
                ${enabledArray.map(element =>
            `<li>${element}</li>`
        ).join('')}
            </ul>
        </section>
        `;

        parentNode.innerHTML += markup;
    }
}