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
            <table class="table">
                <tr>
                    <th>Value</th>
                    <th>Filter</th>
                    <th>Active Since</th>
                    <th></th>
                </tr>      
                    ${enabledArray.map(element => `
                    <tr>
                        <td>${element}</td>
                        <td>INCLUDE</td>
                        <td></td>
                        <td>
                            <button>
                                    <i class="material-icons">delete_forever</i>
                            </button>      
                        </td>                   
                        
                    </tr>
                    `).join('')}
                </ul>
        </details>
        `;

        parentNode.innerHTML += markup;
    }
}