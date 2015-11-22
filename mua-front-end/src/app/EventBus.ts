

export class EventBus {

    map:  Map<string, Array<() => void>> = new Map<string, Array<() => void>>();
    handlerQueue : Array<() => void> = [];
    isFiring: boolean = false;

    constructor(){
        console.log('EventBus is constructed' + this.map);
    }

    subscribe(key: string, handler: () => void, thisValue?: Object){
        console.log("EB subscribed handler for " + key);
        if(this.map.has(key) == false){
            this.map.set(key, []);
        }
        this.map.get(key).push(this.bindFunc(handler, thisValue));
    }

    emit(key: string, data?: Object){
        console.log("EventBus emits event " + key);
        this.map.get(key).forEach((f) => this.handlerQueue.push(f));
        this.fireHandlerCallbacks(data);
    }

    bindFunc(func: ()=>void, thisValue?: Object) {
        return function() {
            return func.apply(thisValue, arguments);
        }
    }

    private fireHandlerCallbacks(data?:Object):void {
        if(!this.isFiring){
            this.isFiring = true;
            // Queue can change during iteration if nested events, for examle
            for (var i = 0; i < this.handlerQueue.length; i++) {
                this.handlerQueue[i](data); // TODO : what if exception within a callback is trown
            }
            this.isFiring = false;
            this.handlerQueue.splice(0, this.handlerQueue.length);
        }
    }
}