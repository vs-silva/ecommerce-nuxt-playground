import mitt from "mitt";
import {EventTypesConstants} from "./event-types.constants";

export default {
    emitter: mitt(),
    eventType: EventTypesConstants
};
