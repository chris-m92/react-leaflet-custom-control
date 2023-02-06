import React from 'react';
var POSITION_CLASSES = {
    bottomleft: 'leaflet-bottom leaflet-left',
    bottomright: 'leaflet-bottom leaflet-right',
    topleft: 'leaflet-top leaflet-left',
    topright: 'leaflet-top leaflet-right',
};
var Control = function (props) {
    var _a = React.useState(document.createElement('div')), portalRoot = _a[0], setPortalRoot = _a[1];
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
    return (React.createElement("div", { ref: controlContainerRef, className: 'leaflet-control' }, props.children));
};
export default Control;
//# sourceMappingURL=Control.js.map