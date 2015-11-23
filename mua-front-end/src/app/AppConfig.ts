import {Inject} from 'angular2/angular2';
import {Http} from 'angular2/http';
import {EventBus} from "EventBus";

export class AppConfig {
    DEFAULT_LANG : string = 'ru';

    eb: EventBus;
    http: Http;
    data: Object = { "topnav": []};

    constructor(@Inject http: Http,@Inject eb: EventBus) {
        this.http = http;
        this.eb = eb;
        this.eb.subscribe("LangSelected", this.onLangSelected, this);

        this.updateStrings();
    }

    onLangSelected(lang?:string){
        console.log("Config handles LangSelected");
        this.updateStrings(lang);
    }

    private updateStrings(lang?: string):void {
        var l = (lang == null) ? this.DEFAULT_LANG : lang;
        var name ='strings_' + l;
        this.http
            .get('/res/data/' + name + '.json')
            .subscribe((res) => {
                this.data = res.json();
                this.eb.emit("LangUpdated");
            });
    }
}