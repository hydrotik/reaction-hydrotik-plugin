import { Session } from "meteor/session";
import { Logger } from "/client/api";

Session.set("DEFAULT_LAYOUT", "coreLayoutHydrotik");
Logger.info("setting DEFAULT_LAYOUT");


Session.set("INDEX_OPTIONS", {
  template: "indexLayoutHydrotik",
  layoutHeader: "layoutHeaderHydrotik",
  layoutFooter: "layoutFooterHydrotik",
  notFound: "notFound",
  dashboardControls: "dashboardControls",
  adminControlsFooter: "adminControlsFooter"
});
