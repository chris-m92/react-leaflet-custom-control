import React from 'react';
import { useLeafletContext } from '@react-leaflet/core';
import L from 'leaflet';
import ReactDOM from 'react-dom';
var Control = function (props) {
    var context = useLeafletContext();
    var control = L.Control.extend({
        onAdd: function () {
            var _controlDiv = L.DomUtil.create('div', props.className);
            L.DomEvent.disableClickPropagation(_controlDiv);
            ReactDOM.render(props.children, _controlDiv);
            return _controlDiv;
        },
        onRemove: function () { },
    });
    React.useEffect(function () {
        var container = context.map;
        var newControl = new control({ position: props.position });
        container.addControl(newControl);
        return function () {
            container.removeControl(newControl);
        };
    });
    return null;
};
export default Control;
//# sourceMappingURL=Control.js.map