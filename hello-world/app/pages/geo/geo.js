import {Page} from 'ionic/ionic';

const GEOLOCATION_LABELS = new Map([
  ["Latitude", "latitude"],
  ["Longitude", "longitude"],
  ["Altitude", "altitude"],
  ["Accuracy", "accuracy"],
  ["Altitude accuracy", "altitudeAccuracy"],
  ["Heading", "heading"],
  ["Speed", "speed"]
])


@Page({
  templateUrl: 'build/pages/geo/geo.html',
})
export class Geo {
  loading = true
  geoItemList = []

  onPageDidEnter() {
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
      let [label, key] = pair
      return {label: label, value: '-'}
    })
  }
  showGeoData(coords) {
    this.geoItemList = [...GEOLOCATION_LABELS].map(pair => {
      let [label, key] = pair
      let value = (coords[key] !== null) ? coords[key].toFixed(3) : 'N/A'
      return {label: label, value: value}
    })
  }
}

function getGeoData() {
  return new Promise((resolve, reject) => {
    let success = (position) => resolve(position.coords)
    let error = (err) =>
      console.log(`Geolocation error ${err.code}: ${err.message}`)
    navigator.geolocation.getCurrentPosition(success, error)
  })
}
