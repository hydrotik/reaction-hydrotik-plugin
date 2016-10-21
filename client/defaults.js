import { Session } from "meteor/session";
import { Logger } from "/client/api";

Session.set("DEFAULT_LAYOUT", "coreLayoutHydrotik");
Logger.info("setting DEFAULT_LAYOUT");
