import {Component, View} from 'angular2/angular2';

@Component({
    selector: 'footer'
})
@View({
    template: `
        <style type="text/css">
            #footer {
                background-color: #999;
            }
        </style>
        <div id="footer">
            <h1>Footer</h1>
        </div>
    `
})
export class FooterComponent {

    constructor() {
    }
}

