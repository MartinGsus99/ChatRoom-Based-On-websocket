var EventEmitter=require('events').EventEmitter;
var event=new EventEmitter();
event.on('some_event',function(){
    console.log('some_event 事件触发');
});

event.on('some_event',function(){
    console.log("Martin wang 的事件触发了");
});

setTimeout(function(){
    event.emit('some_event');
},1000);

var events=require('events');
var emitter=new events.EventEmitter();

//监听器1
var listener1=function listener1(){
    console.log('监听器listener1执行');
}   
//监听器2
var listener2=function listener2(){
    console.log('监听器listener2执行');
}
//绑定connection事件，处理函数为listener1   
emitter.addListener('connection',listener1);
//绑定connection事件，处理函数为listener2
emitter.on('connection',listener2);
var eventListeners=require('events').EventEmitter.listenerCount(emitter,'connection');
console.log(eventListeners+"个监听器监听连接事件。");
//处理connection事件
emitter.emit('connection');
//移除绑定的listener1函数   
emitter.removeListener('connection',listener1);
console.log("listener1不再受监听。");
//触发连接事件
emitter.emit('connection');
eventListeners=require('events').EventEmitter.listenerCount(emitter,'connection');
console.log(eventListeners+"个监听器监听连接事件。");
console.log("程序执行完毕。");