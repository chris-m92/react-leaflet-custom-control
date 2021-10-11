# react-leaflet-custom-control
[![npm](https://img.shields.io/npm/v/react-leaflet-custom-control.svg)](https://npmjs.com/package/react-leaflet-custom-control)
[![npm](https://img.shields.io/npm/dt/react-leaflet-custom-control.svg)](https://npmjs.com/package/react-leaflet-custom-control)
[![license](https://img.shields.io/github.license/chris-m92/react-leaflet-custom-control.svg)](https://github.com/chris-m92/react-leaflet-custom-control)


A React wrapper to create a custom control for [react-leaflet](https://github.com/PaulLeCam/react-leaflet)

The current version of this package supports React Leaflet v3

[Code Sandbox Demo](https://codesandbox.io/s/n1xpv)

## Dependencies
|Name|Version|
|--|--|
|leaflet|`^1.7.1`|
|react-leaflet|`^3.2.1`|
|react|`^17.0.2`|
|react-dom|`^17.0.2`|

## Installation
```bash
npm install --save react-leaflet-custom-control
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
    url='https://{s}.tile.openstreetmap.lorg/{z}/{x}/{y}.png'
    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
  />
  <Control position='topright'>
    <Button color='inherit'> 
      <SearchIcon />
    </Button>
  </Control>
</MapContainer>
```

## Props
| Name       | Type                                                                 | Default      | Description                      |
|------------|----------------------------------------------------------------------|--------------|----------------------------------|
| position   | [ControlOptions](https://leafletjs.com/reference-1.7.1.html#control) | **required** | The position of the control      |
| className? | string                                                               | undefined    | Class name to add to the control |
| children?  | any                                                                  | undefined    | Child element to the control     |