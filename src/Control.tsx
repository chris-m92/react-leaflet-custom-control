import React from 'react'
import L from 'leaflet'
import ReactDOM from 'react-dom'

interface Props {
  position: L.ControlPosition
  children?: React.ReactNode
}

const POSITION_CLASSES = {
  bottomleft: 'leaflet-bottom leaflet-left',
  bottomright: 'leaflet-bottom leaflet-right',
  topleft: 'leaflet-top leaflet-left',
  topright: 'leaflet-top leaflet-right',
}

const Control = (props: Props): JSX.Element => {
  const [container, setContainer] = React.useState<any>(document.createElement('div'))
  const positionClass = (props.position && POSITION_CLASSES[props.position] || POSITION_CLASSES.topright)

  React.useEffect(() => {
    const targetDiv = document.getElementsByClassName(positionClass)
    setContainer(targetDiv[0])
  }, [])

  const controlContainer = (
    <div className='leaflet-control leaflet-bar'>{props.children}</div>
  )

  L.DomEvent.disableClickPropagation(container)

  return ReactDOM.createPortal(
    controlContainer,
    container
  )
}

export default Control