import {provide, bootstrap} from 'angular2/angular2';
import {HTTP_PROVIDERS} from 'angular2/http';
import {ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {AppCmp} from './app/app';
import {BackendService} from "./app/BackendService";
import {AppState} from "./app/AppState";
import {EventBus} from "./app/EventBus";
import {ResourceProvider} from "./app/ResourceProvider";

bootstrap(AppCmp, [
    HTTP_PROVIDERS,
    ROUTER_PROVIDERS,
    provide(EventBus, {useClass: EventBus}),
    provide(ResourceProvider, {useClass: ResourceProvider}),
    provide(AppState, {useClass: AppState}),
    provide(BackendService, {useClass: BackendService}),
    provide(LocationStrategy, {useClass: HashLocationStrategy})
]);