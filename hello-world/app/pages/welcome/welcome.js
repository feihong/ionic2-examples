import {Page, Platform} from 'ionic/ionic'


const MESSAGES = [
  'Hola Mundo',
  'ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ ਦੁਨਿਆ',
  'こんにちは世界',
  '你好世界',
  'مرحبا بالعالم',
  'Hello World',
]

const DEVICE_LABELS = new Map([
  ['Cordova', 'cordova'],
  ['Model', 'model'],
  ['Platform', 'platform'],
  ['Version', 'version'],
  ['Manufacturer', 'manufacturer'],
])

@Page({
  templateUrl: 'build/pages/welcome/welcome.html',
})
export class Welcome {
  constructor(platform: Platform) {
    this.index = 0
    this.greeting = MESSAGES[this.index]
    this.name = ''
    this.platform = platform
    this.deviceItemList = []
    // this.deviceItemList = [...DEVICE_LABELS]
    this.uuid = ''

    document.addEventListener('deviceready', () => {
      this.uuid = device.uuid
      this.deviceItemList = [...DEVICE_LABELS].map(pair => {
        let [label, key] = pair
        let value = device[key] || 'N/A'
        return [label, value]
      })
    }, false)
  }

  onClick() {
    this.index = (this.index + 1) % MESSAGES.length
    this.greeting = MESSAGES[this.index]
  }
}
