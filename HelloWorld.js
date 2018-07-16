"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("lodash");
var Startup = /** @class */ (function () {
    function Startup() {
    }
    Startup.main = function () {
        var group = _.groupBy(['one', 'two', 'three'], 'length');
        var foo = 'hello';
        console.log('hello wolrd111', group);
        function multiply1(x, y) {
            return x * y;
        }
        //함수표현식
        var multiply2 = function (x, y) { return x * y; };
        console.log(multiply1(10, 2));
        console.log(multiply1(10, 3));
        console.log(multiply2(true, 2));
        var isDone = true;
        var color = 'blue';
        color = 'red';
        var multipleColor = "hello, my name is " + isDone;
        console.log(multipleColor);
        return 0;
    };
    return Startup;
}());
Startup.main();
//# sourceMappingURL=HelloWorld.js.map