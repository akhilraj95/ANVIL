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
            // d = document;
            // var f = d.createElement('form');
            // f.action = 'https://anvilp1940823839trial.hanatrial.ondemand.com/persistence-with-jpa/';
            // f.method = 'post';
            // var i = d.createElement('input');
            // i.type = 'hidden';
            // i.name = 'highlightdata';
            // i.value = selection[0];
            // f.appendChild(i);
            // var u = d.createElement('input');
            // u.type = 'hidden';
            // u.name = 'url';
            // u.value = 'test';
            // f.appendChild(u);
            // d.body.appendChild(f);
            // f.submit();
            TrackURL(selection[0]);
            //alert(selection[0]);
        });
      }

  }


  function TrackURL(data)
  {
    var http = new XMLHttpRequest();
    var url = "https://anvilp1940823839trial.hanatrial.ondemand.com/persistence-with-jpa/";
    var params = "highlightdata="+data+"&url=binny";
    http.open("POST", url, true);

    //Send the proper header information along with the request
    http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    http.onreadystatechange = function() {//Call a function when the state changes.
        if(http.readyState == 4 && http.status == 200) {
            alert(http.responseText);
        }
    }
    http.send(params);

  }//end function


});
