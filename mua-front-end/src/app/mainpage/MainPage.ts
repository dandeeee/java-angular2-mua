import {Component, View} from 'angular2/angular2';

import {TopnavComponent} from "../components/topnav/TopnavComponent";
import {ShowcaseComponent} from "../components/showcase/ShowcaseComponent";
import {ShopComponent} from "../components/shop/ShopComponent";
import {InstagramComponent} from "../components/insta/InstagramComponent";
import {FooterComponent} from "../components/footer/FooterComponent";

@Component({})
@View({
    directives: [TopnavComponent, ShowcaseComponent, ShopComponent, InstagramComponent, FooterComponent],
    template: `
        <div class="wrapper">
            <topnav></topnav>
            <showcase></showcase>
            <shop></shop>
            <instastream></instastream>
            <footer></footer>
        </div>
    `
})
export class MainPage {
}

