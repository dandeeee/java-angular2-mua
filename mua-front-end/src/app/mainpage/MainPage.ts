import {Component, View} from 'angular2/angular2';
import {TopnavComponent} from "../topnav/TopnavComponent";

@Component({})
@View({
    directives: [TopnavComponent],
    template: `
        <topnav></topnav>
    `
})
export class MainPage {
}

