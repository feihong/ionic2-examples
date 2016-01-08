import {Page} from 'ionic/ionic'
import {Observable} from 'rxjs/Observable'


const COMPASS_LABELS = new Map([
  ['Magnetic heading', 'magneticHeading'],
  ['True heading', 'trueHeading'],
  ['Heading accuracy', 'headingAccuracy'],
])

@Page({
  templateUrl: 'build/pages/compass/compass.html'
})
export class Compass {
  watchId = null

  onPageDidEnter() {
    this.clearCompassData()

    this.getCompassHeadings(200).subscribe(heading => {
      this.showCompassData(heading)
    })
  }
  onPageDidLeave() {
    if (this.watchId) {
      navigator.compass.clearWatch(this.watchId)
    }
  }
  clearCompassData() {
    this.itemList = [...COMPASS_LABELS].map(pair => {
      let [label, key] = pair
      return {label: label, value: '-'}
    })
  }
  showCompassData(heading) {
    this.itemList = [...COMPASS_LABELS].map(pair => {
      let [label, key] = pair
      let value = (heading[key] !== null) ? heading[key].toFixed(2) : 'N/A'
      return {label: label, value: value}
    })
  }
  getCompassHeadings(frequency) {
    return Observable.create(observer => {
      let onSuccess = (heading) => observer.next(heading)
      let onError = (error) => console.log(`Compass error code: ${error.code}`)
      this.watchId = navigator.compass.watchHeading(
        onSuccess, onError, {frequency: frequency})
    })
  }
}
