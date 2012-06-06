;modjewel.define("weinre/client/ExtensionRegistryImpl", function(require, exports, module) { var Binding, Ex, ExtensionRegistryImpl, Weinre, extensions;

Ex = require('../common/Ex');

Binding = require('../common/Binding');

Weinre = require('../common/Weinre');

extensions = [];

module.exports = ExtensionRegistryImpl = (function() {

  function ExtensionRegistryImpl() {}

  ExtensionRegistryImpl.prototype.getExtensionsAsync = function() {
    if (extensions.length) return;
    return Weinre.WeinreClientCommands.getExtensions(Binding(this, this._cb_getExtensions));
  };

  ExtensionRegistryImpl.prototype._cb_getExtensions = function(extensionsResult) {
    extensions = extensionsResult;
    return this._installExtensions();
  };

  ExtensionRegistryImpl.prototype._installExtensions = function() {
    return WebInspector.addExtensions(extensions);
  };

  return ExtensionRegistryImpl;

})();

require("../common/MethodNamer").setNamesForClass(module.exports);

});
