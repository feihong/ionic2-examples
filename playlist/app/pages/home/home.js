import {Page, Platform} from 'ionic/ionic';

@Page({
  templateUrl: 'build/pages/home/home.html',
})
export class HomePage {
  playlists = [{name: 'Muzak'}, {name: 'Dance Party'}]
  ready = false

  constructor(platform: Platform) {
    platform.ready()
      .then(() => {
        console.log('platform ready');
        return getPlaylists()
      })
      .then(list => {
        this.playlists = list
      })
  }
  playlistSelected(playlist) {
    console.log(playlist);
  }

}

function getPlaylists() {
  return new Promise((resolve, reject) => {
    let onSuccess = (list) => resolve(list)
    let onError = (error) => console.log(error)
    window.cordova.plugins.Music.getPlaylists(onSuccess, onError)
  })
}
