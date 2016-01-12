import {Page, Platform, NavController} from 'ionic/ionic';
import PlaylistPage from '../playlist/playlist'

@Page({
  templateUrl: 'build/pages/home/home.html',
})
export class HomePage {
  playlists = [{name: 'Muzak'}, {name: 'Dance Party'}]

  constructor(platform: Platform, nav: NavController) {
    this.nav = nav
    platform.ready()
      .then(getPlaylists)
      .then(list => this.playlists = list)
  }
  playlistSelected(playlist) {
    this.nav.push(PlaylistPage, {playlist: playlist})
  }
}

function getPlaylists() {
  return new Promise((resolve, reject) => {
    let onSuccess = (list) => resolve(list)
    let onError = (error) => console.log(error)
    window.cordova.plugins.Music.getPlaylists(onSuccess, onError)
  })
}
