�      
͒MN�0���r��7uD��tYuꮗɣ����q��'`�ذ� �����u��RVdɞ���@�Df�UK�x�2��T+�Y�VPJv��K��)���8Q���)]Ǽ�pM���|	Kr�W��.�b�w�ԁ�mA�i��ЍĆ�΄�
�����z'��)��/��u6�k�C��|x;|=�|<�:������@șږ;��m�l���p]o�Ig�L;�>��<�S�II'�;͝tY����Xo"�r#R��83Ng��G��,��f}�%���ĩo������J�5�şi$�"�6臆{ӵn�+gQ�(43�eM�i����@�  onsole.log("listener3 executed");
};

// Bind(연결한다) the connection event with the listener1
eventEmitter.addListener('connection', listener1);
eventEmitter.addListener('connection', listener2);
eventEmitter.on("connection", listener3);

// var eventListener = require("events").EventEmitter.listenerCount(eventEmitter, "connection");
var eventListener = events.EventEmitter.listenerCount(eventEmitter, "connection");
console.log(eventListener + "Listener(s) listening to connection event !");

eventEmitter.emit("connection");

eventEmitter.removeListener("connection", listener3);
console.log("Listener3 will be removed");

eventListener = events.EventEmitter.listenerCount(eventEmitter, "connection");
console.log(eventListener + "Listener(s) listening to connection event !")

eventEmitter.emit("connection");