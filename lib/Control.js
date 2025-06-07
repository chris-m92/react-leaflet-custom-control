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
import L from 'leaflet';
import React from 'react';
import { useMap } from 'react-leaflet';
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
    var controlContainerRef = React.useRef(null);
    var map = useMap();
    /**
     * Whenever the control container ref is created,
     * Ensure the click / scroll propagation is removed
     * This way click/scroll events do not bubble down to the map
     */
    React.useEffect(function () {
        if (controlContainerRef.current !== null) {
            L.DomEvent.disableClickPropagation(controlContainerRef.current);
            L.DomEvent.disableScrollPropagation(controlContainerRef.current);
        }
    }, [controlContainerRef]);
    /**
     * Whenever the position is changed, go ahead and get the container of the map and the first
     * instance of the position class in that map container
     * Fixes #17
     */
    React.useEffect(function () {
        var mapContainer = map.getContainer();
        var targetDiv = mapContainer.getElementsByClassName(positionClass);
        setPortalRoot(targetDiv[0]);
    }, [positionClass]);
    /**
     * Whenever the portal root is complete,
     * append or prepend the control container to the portal root
     */
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
    /**
     * Concatenate the props.container className to the class of the control div
     */
    var className = (((_b = (_a = props.container) === null || _a === void 0 ? void 0 : _a.className) === null || _b === void 0 ? void 0 : _b.concat(' ')) || '') + 'leaflet-control';
    /**
     * Render
     */
    return (React.createElement("div", __assign({}, props.container, { ref: controlContainerRef, className: className }), props.children));
};
export default Control;
//# sourceMappingURL=Control.js.map