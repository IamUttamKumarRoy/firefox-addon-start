var tabs = require("sdk/tabs");
tabs.open({
  url: "http://www.example.com",
  onReady: runScript
});
 
function runScript(tab) {
  tab.attach({
    contentScript: "document.body.style.border = '5px solid red';"
  });
}