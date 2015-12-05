import {Component, View} from 'angular2/angular2';
import {ItemListComponent} from "./ItemListComponent";

@Component({
    selector: 'shop'
})
@View({
    directives: [ItemListComponent],
    template: `
        <style type="text/css">
            #shop {
                background-color: #888;
            }
        </style>
        <div id="shop">
            <itemslist></itemslist>
        </div>
    `
})
export class ShopComponent {
    constructor() {
    }
}

