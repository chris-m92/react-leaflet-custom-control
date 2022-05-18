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
    var _a = React.useState(document.createElement('div')), portalRoot = _a[0], setPortalRoot = _a[1];
    var positionClass = ((props.position && POSITION_CLASSES[props.position]) || POSITION_CLASSES.topright);
    var portalContainer = document.createElement('div');
    React.useEffect(function () {
        var targetDiv = document.getElementsByClassName(positionClass);
        setPortalRoot(targetDiv[0]);
    }, [positionClass]);
    if (props.prepend !== undefined && props.prepend === true) {
        portalRoot.prepend(portalContainer);
    }
    else {
        portalRoot.append(portalContainer);
    }
    var controlContainer = (React.createElement("div", { className: 'leaflet-control leaflet-bar', style: props.style }, props.children));
    L.DomEvent.disableClickPropagation(portalRoot);
    return ReactDOM.createPortal(controlContainer, portalContainer);
};
export default Control;
//# sourceMappingURL=Control.js.map