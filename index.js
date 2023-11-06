function foo() {
    return
        {}
    // ASI -> return; {};
    // Developer expect -> return {};
}

console.log(foo());

var bar = function() {}
(function() {})();
// ASI -> var bar = function() {} (function() {})();
// Developer expect ->> var bar = function () {}; (function() {})();
// TypeError:(intermediate value)(...) is not a function