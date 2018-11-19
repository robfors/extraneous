(function() {
  
  var js_interpreter = {};
  js_interpreter.initialize = function() {};
  js_interpreter.types = ['java_script', 'ecma_script'];
  //add 'wasm'
  js_interpreter.load = function(source)
  {
    var code = new Extraneous.Code(source.code);
    var js_code = code.to_text();
    (new Function(js_code))();
  };

  Extraneous.load_interpreter(js_interpreter);

})();