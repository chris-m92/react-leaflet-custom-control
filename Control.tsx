import React from 'react'
import {
  useLeafletContext
} from '@react-leaflet/core'
import L from 'leaflet'
import ReactDOM from 'react-dom'

interface Props {
  position: L.ControlPosition
  className?: string
  children?: any
}

const Control = (props: Props) => {
  const context = useLeafletContext()

  const control = L.Control.extend({
    onAdd: () => {
      const _controlDiv = L.DomUtil.create('div', props.className)
      L.DomEvent.disableClickPropagation(_controlDiv)
      ReactDOM.render(props.children, _controlDiv)
      return _controlDiv
    },
    onRemove: () => {},
  })

  React.useEffect(() => {
    const container = context.map
    const newControl = new control({ position: props.position })
    container.addControl(newControl)

    return () => {
      container.removeControl(newControl)
    }
  })

  return null
}

export default Control