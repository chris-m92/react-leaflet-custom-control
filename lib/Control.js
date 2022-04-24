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
    var controlContainer = (React.createElement("div", { className: 'leaflet-control leaflet-bar', style: props.style }, props.children));
    L.DomEvent.disableClickPropagation(container);
    return ReactDOM.createPortal(controlContainer, container);
};
export default Control;
//# sourceMappingURL=Control.js.map