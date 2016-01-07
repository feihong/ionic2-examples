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
    this.loading = true
    this.geoItemList = []
    this.update()
  }
  update() {
    this.loading = true
    this.clearGeoData()

    getGeoData().then(coords => {
      this.loading = false
      this.showGeoData(coords)
    })
  }
  clearGeoData() {
    this.geoItemList = [...GEOLOCATION_LABELS].map(pair => {
      let [key, label] = pair
      return {label: label, value: '-'}
    })
  }
  showGeoData(coords) {
    this.geoItemList = [...GEOLOCATION_LABELS].map(pair => {
      let [key, label] = pair
      let value = coords[key] || 'N/A'
      return {label: label, value: value}
    })
  }
}

function getGeoData() {
  return new Promise((resolve, reject) => {
    let success = (position) => resolve(position.coords)
    let error = (err) => alert(`Code ${err.code}: ${err.message}`)
    navigator.geolocation.getCurrentPosition(success, error)
  })
}
