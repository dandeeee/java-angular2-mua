import {Component, View} from 'angular2/angular2';
import {BackendService} from "../../BackendService";

@Component({
    selector: 'showcase'
})
@View({
    template: `
        <div id="showcase" style="background-color: red;">
            <h1>Showcase</h1>
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

