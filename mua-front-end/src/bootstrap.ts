import {provide, bootstrap} from 'angular2/angular2';
import {AppCmp} from './app/app';
import {ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';

bootstrap(AppCmp, [HTTP_PROVIDERS, ROUTER_PROVIDERS, provide(LocationStrategy, {useClass: HashLocationStrategy})]);