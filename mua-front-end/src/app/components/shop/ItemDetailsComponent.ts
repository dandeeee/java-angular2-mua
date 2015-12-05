import {Component, View, CORE_DIRECTIVES,} from 'angular2/angular2';
import {Http} from 'angular2/http'
import {RouteParams} from 'angular2/router';
import {TopnavComponent} from "../topnav/TopnavComponent";
import {BackendService} from "../../BackendService";

@Component({
    selector: 'itemslist'
})
@View({
    directives: [TopnavComponent, CORE_DIRECTIVES],
    template: `
        <topnav></topnav>
        <div>
            <h1>{{item.id}}</h1>
            <h2>{{item.title}}</h2>
            <h3>{{item.quantity}}</h3>
        </div>
        <hr>

    `
})
export class ItemDetailsComponent {
    id: any;
    backend: BackendService;
    item: Object = {};
    routeParam: RouteParams;

    constructor(routeParam: RouteParams, backend: BackendService){
        this.backend = backend;
        this.routeParam = routeParam;
        this.id = this.routeParam.get('id');
        this.fetchItemData();
    }

    fetchItemData() {
        this.backend
            .getItemForId(this.id)
            .subscribe((res) => this.item = res.json();)
    }
}



