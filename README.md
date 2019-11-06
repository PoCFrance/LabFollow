# LabFollow (Front End)

Insert screenshots here

## Introduction

LabFollow is a mobile app designed to emphasise the communication between doctors and their patients via studies. Studies are personalised sets of questions created by a doctor for a patient, who then answers them and send them back to their doctor.

The goal is to create a new way of dialogue between a doctor and its patient: one which would be not be time-consuming and which would be easy to understand and use. 

It would also facilitate the gathering of data (while respecting the patients’ privacy) to help doctors know what they should be improving in their own work.


## Requirements

To have this app running, you need the following tools installed:
* node
* watchman
* Xcode (if you wish to build for iOS)


## Building

Please refer to [LabFollow BackEnd](https://github.com/PoCFrance/LabFollow_BackEnd) to install the server.

At the root of the repository, install all the dependencies with:
```
$ npm i
```

In `app/network/index.js`, replace `000.000.000.000` with your own I.P address.

Then start running:
```
$ npm start
```

### Running on iOS

If you want to run it on a specific device, plug it in and execute the following command: 
```
$ react-native run-ios --device="DEVICE NAME"
```
Replace DEVICE NAME with the name of your device.

If you want to run it on simulator, use this:
```
$ react-native run-ios --simulator="iPhone 11 Pro Max"
```
You can replace 'iPhone 11 Pro Max' with the iPhone of your choice.

### Running on Android

Instructions on how to run on Android are coming soon.

## Author

* Paul Monnery (paul.monnery@epitech.eu)
* Laurane Sevin (laurane.sevin@epitech.eu)