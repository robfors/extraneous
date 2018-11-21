(function() {
  var global = (typeof global == 'undefined' ? window : global);

  Extraneous = class
  {


    static load_interpreter(interpreter)
    {
      if (this._alive == false)
        throw new Error('can not load interpreter, extranEouS was shutdown');
      try
      {
        interpreter.initialize();
      }
      catch (e)
      {
        this._alive = false;
        throw e;
      }
      this._interpreters.push(interpreter);
      interpreter.types.forEach(function(type){
        if (this._source_router.has(type))
          throw new Error("source type already handled");
        this._source_router.set(type, interpreter);
      }, this);
    }

    
    static load_module(module)
    {
      if (this._alive == false)
        throw new Error('can not load module, extranEouS was shutdown');
      try
      {
        module.sources.forEach(function(source){
          var interpreter = this._source_router.get(source.type);
          interpreter.load(source);
        }, this);
      }
      catch (e)
      {
        this._alive = false;
        throw e;
      }
    };


  };
  
  Extraneous._interpreters = [];
  
  Extraneous._source_router = new Map();

  Extraneous._alive = true;

})();