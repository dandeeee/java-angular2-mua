import {Component, View} from 'angular2/angular2';
import {BackendService} from "../../BackendService";

@Component({
    selector: 'showcase'
})
@View({
    template: `
        <div id="showcase">
            <div class="showcase-wrapper">
                <div class="slide slide-4"></div>
            </div>
            <h2>Message from BACKEND: {{message.message}}</h2>
        </div>
    `
})
export class ShowcaseComponent {

    backend: BackendService;
    message: any = {'message' : 'Loading...'};

    constructor(backend: BackendService){
        this.backend = backend;
        this.backend
            .getHello()
            .subscribe(res => this.message = res.json());
    }

}

