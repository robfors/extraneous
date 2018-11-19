(function() {
  var global = (typeof global == 'undefined' ? window : global);

  Extraneous = class
  {

    
    static load(component)
    {
      if (component instanceof this.Interpreter)
        this.load_interpreter(component);
      else if (component instanceof this.Module)
        this.load_module(component);
      else
        throw new TypeError;
    }


    static load_interpreter(interpreter)
    {
      interpreter.initialize();
      this._interpreters.push(interpreter);
      interpreter.types.forEach(function(type, that){
        if (Extraneous._source_router.has(type))
          throw new Error("source type already handled");
        Extraneous._source_router.set(type, interpreter);
      });
    }

    
    static load_module(module)
    {
      module.sources.forEach(function(source, that){
        var interpreter = this._source_router.get(type);
        interpreter.load(source);
      });
    };


  };
  
  Extraneous._interpreters = [];
  
  Extraneous._source_router = new Map();

})();