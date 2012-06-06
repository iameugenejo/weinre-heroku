;modjewel.define("weinre/target/InjectedScriptHostImpl", function(require, exports, module) { var InjectedScriptHostImpl, Weinre;

Weinre = require('../common/Weinre');

module.exports = InjectedScriptHostImpl = (function() {

  function InjectedScriptHostImpl() {}

  InjectedScriptHostImpl.prototype.clearConsoleMessages = function(callback) {
    if (callback) return Weinre.WeinreTargetCommands.sendClientCallback(callback);
  };

  InjectedScriptHostImpl.prototype.nodeForId = function(nodeId, callback) {
    return Weinre.nodeStore.getNode(nodeId);
  };

  InjectedScriptHostImpl.prototype.pushNodePathToFrontend = function(node, withChildren, selectInUI, callback) {
    var children, nodeId;
    nodeId = Weinre.nodeStore.getNodeId(node);
    children = Weinre.nodeStore.serializeNode(node, 1);
    Weinre.wi.DOMNotify.setChildNodes(nodeId, children);
    if (callback) Weinre.WeinreTargetCommands.sendClientCallback(callback);
    if (selectInUI) return Weinre.wi.InspectorNotify.updateFocusedNode(nodeId);
  };

  InjectedScriptHostImpl.prototype.inspectedNode = function(num, callback) {
    var nodeId;
    nodeId = Weinre.nodeStore.getInspectedNode(num);
    return nodeId;
  };

  InjectedScriptHostImpl.prototype.internalConstructorName = function(object) {
    var ctor, ctorName, match, pattern;
    ctor = object.constructor;
    ctorName = ctor.fullClassName || ctor.displayName || ctor.name;
    if (ctorName && (ctorName !== "Object")) return ctorName;
    pattern = /\[object (.*)\]/;
    match = pattern.exec(object.toString());
    if (match) return match[1];
    return "Object";
  };

  return InjectedScriptHostImpl;

})();

require("../common/MethodNamer").setNamesForClass(module.exports);

});
