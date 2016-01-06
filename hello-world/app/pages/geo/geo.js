import {Page} from 'ionic/ionic';

const GEOLOCATION_LABELS = new Map([
  ['latitude', 'Latitude'],
  ['longitude', 'Longitude'],
  ['altitude', 'Altitude'],
  ['accuracy', 'Accuracy'],
  ['altitudeAccuracy', 'Altitude accuracy'],
  ['heading', 'Heading'],
  ['speed', 'Speed'],
])


@Page({
  templateUrl: 'build/pages/geo/geo.html',
})
export class Geo {
  constructor() {
    this.extra = ''
    this.geoItemList = []
  }
  requestGeoData() {
    navigator.geolocation.getCurrentPosition(this.success, this.error)
  }
  success(position) {
    let coords = position.coords
    this.geoItemList = [...GEOLOCATION_LABELS].map(pair => {
      let [key, label] = pair
      return {label: label, value: coords[key] || 'N/A'}
    })
    let j = JSON.stringify(this.geoItemList, null, 2)
    alert(j)
  }
  error(error) {
    alert(`Code ${error.code}: ${error.message}`)
  }
}
