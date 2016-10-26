import { Session } from "meteor/session";
import { Logger } from "/client/api";

Session.set("DEFAULT_LAYOUT", "coreLayoutHydrotik");

Session.set("INDEX_OPTIONS", {
  template: "productsLandingIndex"
});
