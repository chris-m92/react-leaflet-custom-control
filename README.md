# react-leaflet-custom-control
[![npm](https://img.shields.io/npm/v/react-leaflet-custom-control.svg)](https://npmjs.com/package/react-leaflet-custom-control)
[![npm](https://img.shields.io/npm/dt/react-leaflet-custom-control.svg)](https://npmjs.com/package/react-leaflet-custom-control)
[![license](https://img.shields.io/github/license/chris-m92/react-leaflet-custom-control.svg)](https://github.com/chris-m92/react-leaflet-custom-control)


A React wrapper to create a custom control for [react-leaflet](https://github.com/PaulLeCam/react-leaflet) using ReactDOM's Portal capabilities

The current version of this package supports React Leaflet v3

[Code Sandbox Demo](https://codesandbox.io/s/n1xpv)

**NOTE** 
||
|--|
|Version `^1.2.3` (which adds this note to the README) has updated peer dependencies for React v18. This may be a breaking change depending on your environment. If you are still running React v17 then install version 1.2.2.|
|Version `^1.4.0` now has a dependency on `react-leaflet@^4.2.1`. This allows for the `useMap()` hook. This also requires that this `Control` component **MUST** be a child of your `MapContainer`|

## Installation
```bash
#npm
npm install --save react-leaflet-custom-control

#yarn
yarn add react-leaflet-custom-control
```

## Usage
```jsx
import { MapContainer, TileLayer } from 'react-leaflet'
import Control from 'react-leaflet-custom-control'
import { Button } from '@mui/material'
import { Search as SearchIcon } from '@mui/icons-material'
import 'leaflet.css'

<MapContainer center={[35.77, -93.34]} zoom={5}>
  <TileLayer
    attribution="Esri, DigitalGlobe, GeoEye, Earthstar Geographics, CNES/Airbus DS, USDA, USGS, AeroGRID, IGN, and the GIS User Community"
    className="basemap"
    maxNativeZoom={19}
    maxZoom={19}
    subdomains={["clarity"]}
    url="https://{s}.maptiles.arcgis.com/arcgis/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
  />
  <Control prepend position='topright'>
    <Button color='inherit'> 
      <SearchIcon />
    </Button>
  </Control>
</MapContainer>
```
## Order Matters!
Because this uses `React.createPortal` which inherently appends the portal, DOM manipulation is used to append or prepend a container element to the portal target. Because of this, the order of your custom controls matter! The last `Control` element to be prepended to a control position will be at the very top while the last `Control` element to be appended to a control position will be at the very bottom. If mixing with default `React Leaflet` controls, they will be in between your custom controls.

### Weird Quirks
However, because of the way that the portal works and re-renders, multiple control elements will shift order after renders, so it's recommended to have a wrapping element be the child of the `Control` to prevent re-ordering each render

### Example
```jsx
import { MapContainer, TileLayer, ZoomControl } from 'react-leaflet'
import Control from 'react-leaflet-custom-control'
import { Button, Stack } from '@mui/material'
import { 
  Add as AddIcon,
  Delete as DeleteIcon,
  Search as SearchIcon 
} from '@mui/icons-material'
import 'leaflet.css'

<MapContainer center={[35.77, -93.34]} zoom={5} zoomControl={false}>
  <TileLayer
    attribution="Esri, DigitalGlobe, GeoEye, Earthstar Geographics, CNES/Airbus DS, USDA, USGS, AeroGRID, IGN, and the GIS User Community"
    className="basemap"
    maxNativeZoom={19}
    maxZoom={19}
    subdomains={["clarity"]}
    url="https://{s}.maptiles.arcgis.com/arcgis/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
  />
  {/* Search control is the very top right control */}
  <Control prepend position='topright'>
    <Button color='inherit'> 
      <SearchIcon />
    </Button>
  </Control>
  <ZoomControl position='topright' />
  {/* This control will be below the default zoom control. Note the wrapping Stack component */}
  <Control position='topright'>
    <Stack direction='column' spacing={2} >
      <Button color='inherit'>
        <AddIcon />
      </Button>    
      <Button color='inherit'>
        <DeleteIcon />
      </Button>
    </Stack>
  </Control>
</MapContainer>
```

## Props
| Name           | Type                                                                 | Default          | Description                        |
|----------------|----------------------------------------------------------------------|------------------|------------------------------------|
| position       | [ControlOptions](https://leafletjs.com/reference-1.7.1.html#control) | **required**     | The position of the control        |
| children?      | any                                                                  | undefined        | Child element to the control       |
| ~~style?~~     | ~~`React.CSSProperties`~~                                            | ~~undefined~~    | ~~CSS Styles to override the control~~ |
| container?     | `React.HTMLAttributes<HTMLDivElement>`                               | undefined        | The target root container for the portal |
| prepend?       | boolean                                                              | undefined        | Whether the control should be prepended or appended to the position|

## Thanks
Huge thanks to @davetapley for contributing to `@1.3.0` and helping to work some of the issues.
Thanks to @samiamlabs for contributing to `@1.3.2` for fixing the infinite `div` issue.
