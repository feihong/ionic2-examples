import {Page} from 'ionic/ionic';

const COMPASS_LABELS = new Map([
  ['Magnetic heading', 'magneticHeading'],
  ['True heading', 'trueHeading'],
  ['Heading accuracy', 'headingAccuracy'],
])

@Page({
  templateUrl: 'build/pages/compass/compass.html'
})
export class Compass {
  constructor() {
    this.clearCompassData()
  }
  clearCompassData() {
    this.itemList = [...COMPASS_LABELS].map(pair => {
      let [label, key] = pair
      return {label: label, value: '-'}
    })
  }
}
