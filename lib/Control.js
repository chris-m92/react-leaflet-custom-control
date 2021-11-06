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
import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import L from 'leaflet';
import ReactDOM from 'react-dom';
var POSITION_CLASSES = {
    bottomleft: 'leaflet-bottom leaflet-left',
    bottomright: 'leaflet-bottom leaflet-right',
    topleft: 'leaflet-top leaflet-left',
    topright: 'leaflet-top leaflet-right',
};
var Control = function (props) {
    var _a = React.useState(document.createElement('div')), container = _a[0], setContainer = _a[1];
    var positionClass = ((props.position && POSITION_CLASSES[props.position]) || POSITION_CLASSES.topright);
    React.useEffect(function () {
        var targetDiv = document.getElementsByClassName(positionClass);
        setContainer(targetDiv[0]);
    }, [positionClass]);
    var controlContainer = (_jsx("div", __assign({ className: 'leaflet-control leaflet-bar', style: props.style }, { children: props.children }), void 0));
    L.DomEvent.disableClickPropagation(container);
    return ReactDOM.createPortal(controlContainer, container);
};
export default Control;
//# sourceMappingURL=Control.js.map