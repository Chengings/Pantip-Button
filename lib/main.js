const self = require("self");
const panel = require("panel");
const favicon = self.data.url("pantip.ico");
const content_home = self.data.url("content/home.html");

exports.main = function(options) {
  // Crate toolbar button for Pantip menu
  var toolbarbutton = require("toolbarbutton").ToolbarButton({
    id: "pantip-menu",
    label: "Pantip Menu",
    image: favicon,
	panel: panel.Panel({
		width: 400,
		height: 500,
		contentURL: content_home
	})
  });
  // Handle the events of pantip menu to navigation bar
  var loadEvent = options.loadReason;
  if ( loadEvent == "enable" || loadEvent == "install" || loadEvent == "startup"
 	   || loadEvent == "upgrade") {
    toolbarbutton.moveTo({toolbarID: "nav-bar"});
  }
}
