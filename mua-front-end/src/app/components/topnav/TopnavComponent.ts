import {Component, View} from 'angular2/angular2';
import {RouterLink, Router} from 'angular2/router';

import {MainPage} from "../../mainpage/MainPage";

@Component({
    selector: 'topnav'
})
@View({
    directives: [RouterLink],
    template: `
        <div style="background-color: #c7d1cb;">
            <nav>
                <a [router-link]="['/Main']">Home</a>
                <a [router-link]="['/Shop']">Shop</a>
                <a [router-link]="['/About']">About</a>
                <a href="http://google.com">Google</a>
            </nav>
        </div>
    `
})
export class TopnavComponent {

    constructor(router: Router) {
        var rt = router.parent == null ? router : router.parent;

        // inject component-level routes
        rt.config([
            { path: '/shop', component: MainPage, as: 'Shop' },
            { path: '/about', component: MainPage, as: 'About' }
        ]);
    }
}

