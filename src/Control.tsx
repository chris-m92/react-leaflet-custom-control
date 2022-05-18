import React from 'react'
import L from 'leaflet'
import ReactDOM from 'react-dom'

interface Props {
  position: L.ControlPosition
  children?: React.ReactNode
  style?: React.CSSProperties
  prepend?: boolean
}

const POSITION_CLASSES = {
  bottomleft: 'leaflet-bottom leaflet-left',
  bottomright: 'leaflet-bottom leaflet-right',
  topleft: 'leaflet-top leaflet-left',
  topright: 'leaflet-top leaflet-right',
}

const Control = (props: Props): JSX.Element => {
  const [portalRoot, setPortalRoot] = React.useState<any>(document.createElement('div'))
  const positionClass = ((props.position && POSITION_CLASSES[props.position]) || POSITION_CLASSES.topright)
  const portalContainer = document.createElement('div')

  React.useEffect(() => {
    const targetDiv = document.getElementsByClassName(positionClass)
    setPortalRoot(targetDiv[0])
  }, [positionClass])

  if (props.prepend !== undefined && props.prepend === true) {
    portalRoot.prepend(portalContainer)
  } else {
    portalRoot.append(portalContainer)
  }

  const controlContainer = (
    <div className='leaflet-control leaflet-bar' style={props.style}>{props.children}</div>
  )

  L.DomEvent.disableClickPropagation(portalRoot)

  return ReactDOM.createPortal(
    controlContainer,
    portalContainer
  )
}

export default Control