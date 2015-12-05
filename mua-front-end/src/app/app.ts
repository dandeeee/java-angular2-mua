import {Component, View } from 'angular2/angular2';
import {ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {ROUTER_DIRECTIVES, RouteConfig, Router, Location, Route} from 'angular2/router';
import {RouterLink, RouterOutlet} from 'angular2/router';

import {MainPage} from "./page/MainPage";
import {AboutPage} from "./page/AboutPage";
import {ShopPage} from "./page/ShopPage";
import {ItemDetailsComponent} from "./components/shop/ItemDetailsComponent";

@Component({
    selector: 'app',
})
@View({
    directives: [ROUTER_DIRECTIVES, RouterOutlet],
    template: `
        <router-outlet></router-outlet>
    `
})
@RouteConfig([
    { path: '/', component: MainPage, as: 'Main' },
    { path: '/about', component: AboutPage, as: 'About' },

    { path: '/shop', component: ShopPage, as: 'Shop' },
    { path: '/item/:id', component: ItemDetailsComponent, as: 'ItemsDetails' }
])
export class AppCmp {

    router: Router;
    location: Location;

    constructor(router: Router, location: Location) {
        this.router = router;
        this.location = location;
    }

    getLinkStyle(path:any) {
        return this.location.path() === path;
    }
}
