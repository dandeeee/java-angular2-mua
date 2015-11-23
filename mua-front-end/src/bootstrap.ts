import {provide, bootstrap} from 'angular2/angular2';
import {AppCmp} from './app/app';
import {ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';
import {BackendService} from "./app/BackendService";
import {AppConfig} from "./app/AppConfig";
import {EventBus} from "./app/EventBus";

bootstrap(AppCmp, [
    HTTP_PROVIDERS,
    ROUTER_PROVIDERS,
    provide(EventBus, {useClass: EventBus}),
    provide(AppConfig, {useClass: AppConfig}),
    provide(BackendService, {useClass: BackendService}),
    provide(LocationStrategy, {useClass: HashLocationStrategy})
]);