import {Component, View } from 'angular2/angular2';
import {ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {ROUTER_DIRECTIVES, RouteConfig, Router, Location, Route} from 'angular2/router';
import {RouterLink, RouterOutlet} from 'angular2/router';
import {MainPage} from "./mainpage/MainPage";

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
    // add app level routes
    { path: '/', component: MainPage, as: 'Main' }
])
export class AppCmp {

    router: Router;
    location: Location;

    constructor(router: Router, location: Location) {
        this.router = router;
        this.location = location;
    }

    getLinkStyle(path) {
        return this.location.path() === path;
    }
}
