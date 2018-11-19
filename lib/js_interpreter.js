(function() {
  
  var js_interpreter = new Extraneous.Interpreter();
  js_interpreter.initialize = function() {};
  js_interpreter.types = ['java_script', 'ecma_script'];
  //add 'wasm'
  js_interpreter.load = function(source)
  {
    if (typeof source.code != 'function')
      throw new Error("expedited 'code' to be a function");
    var js_code = source.code.to_text();
    (new Function(js_code))();
  };

})();