import {Component, View} from 'angular2/angular2';

@Component({
    selector: 'footer'
})
@View({
    template: `
        <div id="footer" style="background-color: #00cc99;">
            <h1>Footer</h1>
        </div>
    `
})
export class FooterComponent {

    constructor() {
    }
}

