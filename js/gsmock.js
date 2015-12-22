(function(){
  gs = gs || {};
  
  gs.include = gs.include || function(scriptName) { 
    gs.log('Call to gs.include for ' + scriptName);
  };
  
  gs.log = gs.log || console.log;
})();
