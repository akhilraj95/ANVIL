//
var ANVIL_ENABLED = false;


chrome.commands.onCommand.addListener(function(command) {

  // command : toggle Anvil service
  if(command == "toggle-activate-anvil"){
      if(ANVIL_ENABLED){
            ANVIL_ENABLED = false;
            alert("Disabled - Anvil assist. Alt+A to enable");
      }else{
            ANVIL_ENABLED = true;
            alert("Enabled - Anvil assist. Alt+A to disable");
      }
  }

  // Enables rest of the commands if Anvil is enabled
  if(ANVIL_ENABLED){

      // command : highlight (save note to cloud)
      if(command == "highlight"){
        chrome.tabs.executeScript( {
          code: "window.getSelection().toString();"
        }, function(selection) {
          alert(selection[0]);
        });
      }

  }



});
