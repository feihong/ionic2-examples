# Feihong's Ionic 2 Examples

This is a collection of [Ionic 2](http://ionicframework.com) examples.

## Installation

Install dependencies:

```
npm install -g ionic@beta cordova
npm install -g ios-sim
brew install android-sdk
android     # open Android SDK Manager
```

## Ionic cheatsheet

| **Command** | **Description** |
|----------|-------|
| `ionic start --list` | List all starter templates |
| `ionic start -a "Project Name" -t blank project-name --v2` | Start a new Ionic 2 project, with the given human-readable name and starter template |
| `ionic serve` | Preview your app in the browser |
| `ionic platform add ios` | Add iOS platform module to Cordova |
| `ionic emulate ios -l -c` | Run your app inside the iOS Simulator with live reload and logging to console |
| `ionic plugin add name-of-plugin` | Download and install a Cordova plugin to the plugins directory and package.json |

## Android SDK downloads

Run `android` to open the Android SDK Manager. In the GUI, select the following and then hit the Install button.

- Android SDK Tools
- Android SDK Platform-tools
- Android SDK Build-tools
- Google USB Driver

If you're targetting Android 5.1.1, install API 22. If you're focused on a different version of Android, select the appropriate API.

[Source](http://stackoverflow.com/questions/28896828/android-sdk-manager-do-you-need-to-install-all-android-platforms)

## Running on device

To run the app on an iOS device, use XCode to open the .xcodeproj file inside platforms/ios. Select your device and click the run button.

On Android, just run `ionic run android`. If you want live reload and console logging, you can first `ionic plugin add cordova-plugin-whitelist` and then `ionic run android -l -c`.
