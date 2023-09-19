const EventEmitter = require('events')

const customEmitter = new EventEmitter();

const listener1 = () => {
    console.log("HI");
}

const listener2 = (data) => {
    console.log(data);
}

customEmitter.on("hi", listener1);
customEmitter.on("hi", () => console.log("HI2"));
customEmitter.on("HiArg", listener2);

customEmitter.off("hi", listener1); // 需要傳遞所對應的 callback function instance。

customEmitter.emit("hi");
customEmitter.emit("HiArg", "GOOGOO");