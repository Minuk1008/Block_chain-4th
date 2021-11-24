const events = require("events");
const eventEmitter = new events.EventEmitter();

var connectHandler = function connected() {
    console.log("connection success");

    eventEmitter.emit("data_receive");
};

eventEmitter.on("connection", connectHandler);

eventEmitter.on("data_receive", function() {
    console.log("data received success");
})
eventEmitter.emit("connection");

console.log("Program finished !");