;modjewel.define("weinre/target/WiConsoleImpl", function(require, exports, module) { var Weinre, WiConsoleImpl;

Weinre = require('../common/Weinre');

module.exports = WiConsoleImpl = (function() {

  function WiConsoleImpl() {
    this.messagesEnabled = true;
  }

  WiConsoleImpl.prototype.setConsoleMessagesEnabled = function(enabled, callback) {
    var oldValue;
    oldValue = this.messagesEnabled;
    this.messagesEnabled = enabled;
    if (callback) {
      return Weinre.WeinreTargetCommands.sendClientCallback(callback, [oldValue]);
    }
  };

  WiConsoleImpl.prototype.clearConsoleMessages = function(callback) {
    Weinre.wi.ConsoleNotify.consoleMessagesCleared();
    if (callback) {
      return Weinre.WeinreTargetCommands.sendClientCallback(callback, []);
    }
  };

  WiConsoleImpl.prototype.setMonitoringXHREnabled = function(enabled, callback) {
    if (callback) {
      return Weinre.WeinreTargetCommands.sendClientCallback(callback, []);
    }
  };

  return WiConsoleImpl;

})();

require("../common/MethodNamer").setNamesForClass(module.exports);

});
