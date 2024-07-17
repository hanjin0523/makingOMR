/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Camera from './android/app/src/component/Camera';
import CameraScreen from './android/app/src/component/Camera';

function App(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <Text>Hello World카메라</Text>
      <CameraScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
