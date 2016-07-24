# Restroom App v1.0.0

The Easiest way to find Restroom

[![Ionic](https://img.shields.io/badge/ionic-v1.3.1-brightgreen.svg)](https://img.shields.io/badge/ionic-v1.3.1-brightgreen.svg)
[![Angular](https://img.shields.io/badge/Angular-v1.5.3-green.svg)](https://img.shields.io/badge/Angular-v1.5.3-green.svg)
[![Platform](https://img.shields.io/badge/Platform-Android%20%7C%20IOS%20%7C%20Web-lightgrey.svg)](https://img.shields.io/badge/Platform-Android%20%7C%20IOS%20%7C%20Web-lightgrey.svg)

![Poster](https://s32.postimg.org/ahd5ckcmt/client.png)

Restroom App used for Find nearest restroom written in Angular v1.5.3 and Ionic v1.3.1

## Essential Features

- [x] Include App & Server communication logic
- [x] Play time saving (In my app, Save Auth_token & Review)
- [x] Social authentication service(facebook auth)
- [x] google Play store uploaded
- [x] Deploy on the cloud server (Using AWS EC2, RDS)
- [x] HTTP Response Validation
- [x] Using Database Query (Using Postgres)
- [x] Web server (node.js, AWS EC2 t2.micro Ubuntu 14.04)

## Additional Features

- [x] Using cloud service(AWS EC2, RDS)
- [x] Add Friend, Ranking, Gift (In my app, Add review, Request new restroom)
- [x] Restrful Api Design (Node.js)
- [ ] Push Notification
- [x] Hybrid Application(IOS, Android)
- [ ] CMS Service

## Used
* [Ionic 1.3.1](http://ionicframework.com/) - Advanced HTML5 Hybrid Mobile App Framework
* [Angular 1.5.3](https://angularjs.org/) - Superheroic JavaScript MVW Framework
* [Mapbox.js](https://www.mapbox.com/) - Design and publish beautiful maps
* [ngCordova](http://ngcordova.com/) - Simple extensions for common Cordova Plugins
* [cordova](https://cordova.apache.org/) - Mobile apps With HTML, CSS & JS 
* [cordova-plugin-whitelist](https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-whitelist/) - This plugin implements a whitelist policy for navigating the application webview on Cordova 4.0
* [cordova-plugin-inappbrowser](https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-inappbrowser/) - This plugin provides a web browser view that displays when calling cordova.InAppBrowser.open()
* [ng-cordova-oauth](https://github.com/nraboy/ng-cordova-oauth) - AngularJS oauth library for use with Apache Cordova projects 


## Development Env

- Dev: Mac OS X 10.11 / Webstorm / Android Studio / Xcode / DataGrip / Postman
- Database: AWS RDS PostgreSQL 9.5.2
- Server: Node v4.4.7
- Server Env: AWS EC2 t2.micro Linux 14.04
- Client: Ionic 1.3


## Client Getting Started
```bash
$ npm install -g cordova ionic
```
```bash
$ npm install
```
```bash
$ bower isntall
```
```bash
$ ionic add platform android
```
```bash
$ ionic emulate android(need to Android Studio or Avd)
           or
$ ionic emulate ios (need to OS X, Xcode)
```

## License

Restroom App is released under the MIT license. See LICENSE for details.
