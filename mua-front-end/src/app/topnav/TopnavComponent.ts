import {Component, View, bootstrap} from 'angular2/angular2';
import {RouterLink} from 'angular2/router';

@Component({
    selector: 'topnav'
})
@View({
    directives: [RouterLink],
    template: `
        <section class="sample-app-content">
            <nav>
                <a [router-link]="['/Main']">Home</a>
                <!--<a [router-link]="['/Shop']">Shop</a>-->
                <!--<a [router-link]="['/About']">About</a>-->
            </nav>
        </section>
    `
})
export class TopnavComponent {
}

