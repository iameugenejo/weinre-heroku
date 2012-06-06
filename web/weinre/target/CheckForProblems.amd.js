;modjewel.define("weinre/target/CheckForProblems", function(require, exports, module) { var CheckForProblems, checkForOldPrototypeVersion;

module.exports = CheckForProblems = (function() {

  function CheckForProblems() {}

  CheckForProblems.check = function() {
    return checkForOldPrototypeVersion();
  };

  return CheckForProblems;

})();

checkForOldPrototypeVersion = function() {
  var badVersion;
  badVersion = false;
  if (typeof Prototype === "undefined") return;
  if (!Prototype.Version) return;
  if (Prototype.Version.match(/^1\.5.*/)) badVersion = true;
  if (Prototype.Version.match(/^1\.6.*/)) badVersion = true;
  if (badVersion) {
    return alert("Sorry, weinre is not support in versions of Prototype earlier than 1.7");
  }
};

require("../common/MethodNamer").setNamesForClass(module.exports);

});
