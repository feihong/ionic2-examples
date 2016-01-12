import {Page, NavController, NavParams} from 'ionic/ionic';


@Page({
  templateUrl: 'build/pages/playlist/playlist.html',
})
export default class PlaylistPage {
  selectedSong = null
  // songs = [
  //   {name: 'Sweet Home Chicago', artist: 'Matty Rico'},
  //   {name: 'Monkey Moves', artist: 'Gorilla Bob'},
  //   {name: 'Long Legs', artist: 'DJ Giraffe Jeff'},
  // ]
  songs = []

  constructor(nav: NavController, params: NavParams) {
    this.nav = nav
    this.playlist = params.get('playlist')
    getSongsFromPlaylist(this.playlist.id)
      .then(list => {
        console.log(`Received ${list.length} songs`);
        this.songs = list
      })
  }
  songSelected(song) {
    // alert(song.name)
    if (this.selectedSong && this.selectedSong.id === song.id) {
      this.selectedSong = null
      stopSong(song.id).then(() => alert('stopped'))
    } else {
      this.selectedSong = song
      playSong(song.id).then(() => alert('played'))
    }
  }
}

function getSongsFromPlaylist(playlistId) {
  return new Promise((resolve, reject) => {
    let onSuccess = (list) => resolve(list)
    let onError = (error) => console.log(error)
    window.cordova.plugins.Music.getSongsFromPlaylist(playlistId, onSuccess, onError)
  })
}

function playSong(songId) {
  return new Promise((resolve, reject) => {
    let onSuccess = () => resolve()
    let onError = (error) => console.log(error)
    window.cordova.plugins.Music.playSong(songId, onSuccess, onError)
  })
}

function stopSong(songId) {
  return new Promise((resolve, reject) => {
    let onSuccess = () => resolve()
    let onError = (error) => console.log(error)
    window.cordova.plugins.Music.stopSong(songId, onSuccess, onError)
  })
}
