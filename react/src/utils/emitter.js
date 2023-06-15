
//clear data sau khi input:
import EventEmitter from "events";
const _emitter = new EventEmitter();
_emitter.setMaxListeners(0); //nlimit listener
export const emitter = _emitter;
