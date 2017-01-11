import {NativeModules} from 'react-native'
const {RNResizeWindow} = NativeModules

const WindowResizer = {
  resize: (width, height) => {
    if(!width || !height){
      __DEV__ && console.warn('You must specify the width and height parameters')
    }
    RNResizeWindow.resize(width, height);
  }
}

module.exports = WindowResizer;
