import L from 'leaflet';
interface Props {
    position: L.ControlPosition;
    className?: string;
    children?: any;
}
declare const Control: (props: Props) => null;
export default Control;
