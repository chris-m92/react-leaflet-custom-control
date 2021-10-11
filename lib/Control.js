"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var core_1 = require("@react-leaflet/core");
var leaflet_1 = require("leaflet");
var react_dom_1 = require("react-dom");
var Control = function (props) {
    var context = (0, core_1.useLeafletContext)();
    var control = leaflet_1.default.Control.extend({
        onAdd: function () {
            var _controlDiv = leaflet_1.default.DomUtil.create('div', props.className);
            leaflet_1.default.DomEvent.disableClickPropagation(_controlDiv);
            react_dom_1.default.render(props.children, _controlDiv);
            return _controlDiv;
        },
        onRemove: function () { },
    });
    react_1.default.useEffect(function () {
        var container = context.map;
        var newControl = new control({ position: props.position });
        container.addControl(newControl);
        return function () {
            container.removeControl(newControl);
        };
    });
    return null;
};
exports.default = Control;
//# sourceMappingURL=Control.js.map