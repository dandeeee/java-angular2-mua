import {Inject} from 'angular2/angular2';
import {Http} from 'angular2/http'

export class BackendService {

    result: Object;
    error: Object;
    http: Http;
    baseUrl: string;

    constructor(@Inject http: Http) {
        this.http = http;
        this.baseUrl = 'http://localhost:9090';
        console.log("Created BackendService")
    }

    getHello(){
        return this.http
            .get(this.baseUrl + '/rest/hello');
    }

}