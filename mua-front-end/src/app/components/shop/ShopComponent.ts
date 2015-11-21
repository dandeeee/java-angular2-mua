import {Component, View} from 'angular2/angular2';

@Component({
    selector: 'shop'
})
@View({
    template: `
        <style type="text/css">
            #shop {
                background-color: #888;
            }
        </style>
        <div id="shop">
            <h1>Shop</h1>
        </div>
    `
})
export class ShopComponent {
    constructor() {
    }
}

