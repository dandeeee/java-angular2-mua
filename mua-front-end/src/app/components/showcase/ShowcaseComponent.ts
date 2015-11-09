import {Component, View} from 'angular2/angular2';

@Component({
    selector: 'showcase'
})
@View({
    template: `
        <div id="showcase" style="background-color: lightslategray;">
            <h1>Showcase</h1>
        </div>
    `
})
export class ShowcaseComponent {

    constructor() {
    }

}

