var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React from 'react';
var POSITION_CLASSES = {
    bottomleft: 'leaflet-bottom leaflet-left',
    bottomright: 'leaflet-bottom leaflet-right',
    topleft: 'leaflet-top leaflet-left',
    topright: 'leaflet-top leaflet-right',
};
var Control = function (props) {
    var _a, _b;
    var _c = React.useState(document.createElement('div')), portalRoot = _c[0], setPortalRoot = _c[1];
    var positionClass = ((props.position && POSITION_CLASSES[props.position]) || POSITION_CLASSES.topright);
    var controlContainerRef = React.createRef();
    React.useEffect(function () {
        var targetDiv = document.getElementsByClassName(positionClass);
        setPortalRoot(targetDiv[0]);
    }, [positionClass]);
    React.useEffect(function () {
        if (portalRoot !== null) {
            if (props.prepend !== undefined && props.prepend === true) {
                portalRoot.prepend(controlContainerRef.current);
            }
            else {
                portalRoot.append(controlContainerRef.current);
            }
        }
    }, [portalRoot, props.prepend, controlContainerRef]);
    var className = (((_b = (_a = props.container) === null || _a === void 0 ? void 0 : _a.className) === null || _b === void 0 ? void 0 : _b.concat(' ')) || '') + 'leaflet-control';
    return (React.createElement("div", __assign({}, props.container, { ref: controlContainerRef, className: className }), props.children));
};
export default Control;
//# sourceMappingURL=Control.js.map