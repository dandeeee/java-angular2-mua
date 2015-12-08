import {Component, View, NgFor, CORE_DIRECTIVES} from 'angular2/angular2';
import {Http} from 'angular2/http'
import {RouterLink, Router} from 'angular2/router';
import {BackendService} from "../../BackendService";

@Component({
    selector: 'itemslist'
})
@View({
    directives: [NgFor, RouterLink, CORE_DIRECTIVES],
    template: `
        <div *ng-for="#i of items;">
            <a [router-link]="['/ItemsDetails',{'id': i.id}]">{{i.title}}-{{i.quantity}} </a>
            <img src="rest/file/img?src={{i.attachments[0].path}}" width="100px;" />
        </div>
    `
})
export class ItemListComponent {

    backend: BackendService;
    items: Object[] = [];

    constructor(backend: BackendService){
        this.backend = backend;
        this.backend
            .getShopItems()
            .subscribe((res:any) => this.items = res.json());
    }


}

