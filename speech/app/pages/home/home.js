import {Page} from 'ionic/ionic';

@Page({
  templateUrl: 'build/pages/home/home.html',
})
export class HomePage {
  text = 'Speak your mind now and then hold your peace'
  // text = '我可以彻底解释一切，但你愿意洗耳恭听吗？'
  status = ''
  rate = 1.5
  locale = 'en-GB'
  // locale = 'zh-CN'

  speak() {
    if (this.text.trim()) {
      let options = {
        text: this.text,
        locale: this.locale,
        rate: this.rate,
      }
      let onFulfilled = () => this.setStatus('Fulfilled')
      let onRejected = (reason) => this.setStatus('Rejected due to ' + reason)
      TTS.speak(options, onFulfilled, onRejected)
    }
  }
  setStatus(message) {
    let d = new Date()
    let datestr = `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`
    this.status = `${datestr}  ${message}`
  }
}
