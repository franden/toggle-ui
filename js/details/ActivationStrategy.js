export default class ActivationStrategy {
    constructor(name, enabledArray) {
        this.name = name;
        this.enabledArray = enabledArray;
    }

    append(parentNode) {
        let section = document.createElement("section");
        let enabledArray = this.enabledArray;

        console.log(`enabledArray: ${enabledArray}`);
        enabledArray.forEach(element => console.log(`element: ${element}`));

        const markup = `
        <ul>
        <lh>${this.name}</lh>
            ${enabledArray.map(element =>
            `<li>${element}</li>`
        ).join('')}
        </ul>

        `;

        section.innerHTML = markup;
        parentNode.appendChild(section);
    }
}