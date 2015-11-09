import {Component, View} from 'angular2/angular2';

import {TopnavComponent} from "../components/topnav/TopnavComponent";
import {ShowcaseComponent} from "../components/showcase/ShowcaseComponent";
import {ShopComponent} from "../components/shop/ShopComponent";
import {InstastreamComponent} from "../components/insta/InstastreamComponent";
import {FooterComponent} from "../components/footer/FooterComponent";

@Component({})
@View({
    directives: [TopnavComponent, ShowcaseComponent, ShopComponent, InstastreamComponent, FooterComponent],
    template: `
        <topnav></topnav>
        <showcase></showcase>
        <shop></shop>
        <instastream></instastream>
        <footer></footer>
    `
})
export class MainPage {
}

