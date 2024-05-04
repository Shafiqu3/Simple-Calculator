"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("lodash");
function component() {
    var div = document.createElement("div");
    div.innerHTML = _.join(["Hello", "webpack"], "");
    return div;
}
document.body.appendChild(component());
