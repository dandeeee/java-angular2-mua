import {Component, View, Inject, NgFor} from 'angular2/angular2';
import {RouterLink, Router} from 'angular2/router';
import {Http} from 'angular2/http'

import {MainPage} from "../../mainpage/MainPage";

import {AppConfig} from "../../AppConfig";
import {EventBus} from "../../EventBus";

@Component({
    selector: 'topnav',
    events: ['update']
})
@View({
    directives: [RouterLink, NgFor],
    template: `

        <nav class="uk-navbar uk-margin-large-bottom">
            <div class="toolbar-top uk-clearfix" data-uk-sticky="{boundary: '#contacts'}">
                <div class="uk-vertical-align" data-uk-scrollspy-nav="{closest:'a', smoothscroll:true}">

                    <div id="toolbar-logo" class="invisible uk-vertical-align-middle"><a href="#head">MUA</a></div>
                    <div id="toolbar-divider" class="invisible uk-vertical-align-middle"></div>

                    <div class="uk-nav uk-vertical-align-middle">
                        <a *ng-for="#i of data.topnav;" href="{{i.url}}">{{i.title}}</a>
                    </div>

                    <div id="toolbar-lang" class="invisible uk-vertical-align-middle">
                        <button (click)="fireLangSelected('ru')">ru</button>
                        <button (click)="fireLangSelected('en')">en</button>
                    </div>
                </div>
            </div>

            <div id="mobile-menu" class="uk-offcanvas">
                <div class="uk-offcanvas-bar mobile-menu">
                    <h1 class="menu-logo"><a href="http://muashop.by">MUA</a></h1>

                    <hr style="width: 98%;">

                    <ul class="uk-nav uk-nav-offcanvas">
                        <li *ng-for="#i of data.topnav;"><a href="{{i.url}}">{{i.title}}</a></li>
                    </ul>

                    <div class="menu-lang">
                        <button (click)="fireLangSelected('ru')">ru</button>
                        <button (click)="fireLangSelected('en')">en</button>
                    </div>
                </div>
            </div>

            <hr class="mobile-only"/>
            <a class="mobile-only menu-bars" href="#mobile-menu" data-uk-offcanvas><i class="fa fa-bars"></i></a>

        </nav>



        <!--<div id="topnav">-->
            <!--<nav>-->
                <!--<a [router-link]="['/Main']">Home</a>-->
                <!--<a [router-link]="['/Shop']">Shop</a>-->
                <!--<a [router-link]="['/About']">About</a>-->
                <!--<a href="http://google.com">Google</a>-->
            <!--</nav>-->
        <!--</div>-->
    `
})
export class TopnavComponent {

    http: Http;
    data: Object = { "topnav": [ {"title" : "xxx"} ]};
    config: AppConfig;
    eb: EventBus;

    constructor(router: Router, http: Http, eb: EventBus, config: AppConfig) {
        this.http = http;
        this.eb = eb;
        this.config = config;

        var rt = router.parent == null ? router : router.parent;

        // inject component-level routes
        rt.config([
            { path: '/shop', component: MainPage, as: 'Shop' },
            { path: '/about', component: MainPage, as: 'About' }
        ]);

        eb.subscribe("LangChanged", () => console.log("TopnavComponent handles LangChanged"));
        eb.subscribe("LangUpdated", this.langUpdated, this);
    }

    fireLangSelected(lang:string) {
        console.log("Lang button is Pressed");
        this.eb.emit("LangSelected", lang);
    }

    langUpdated() : void {
        console.log("TopnavComponent handles LangUpdated");
        this.data = this.config.data;
    }

}

