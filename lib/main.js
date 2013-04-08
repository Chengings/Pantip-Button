const self = require("self");
const panel = require("panel");
const favicon = self.data.url("pantip.ico");
const content_home = self.data.url("content/index.html");

exports.main = function(options) {
  // Crate toolbar button for Pantip menu
  var toolbarbutton = require("toolbarbutton").ToolbarButton({
    id: "pantip-menu",
    label: "Pantip Menu",
    image: favicon,
	panel: panel.Panel({
		width: 320,
		height: 480,
		contentURL: content_home
	})
  });
  toolbarbutton.moveTo({toolbarID: "nav-bar"});
}
