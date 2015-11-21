import {Component, View} from 'angular2/angular2';

@Component({
    selector: 'instastream'
})
@View({
    template: `
        <style type="text/css">
            #instagram {
                background-color: #ccc;
            }
        </style>
        <div id="instagram">
            <h1>InstaStream</h1>
        </div>
    `
})
export class InstagramComponent {

    constructor() {
    }

}

