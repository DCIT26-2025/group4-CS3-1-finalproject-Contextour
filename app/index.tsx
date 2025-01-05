import React from 'react';
import { View, Text, Image, StyleSheet, ImageBackground } from 'react-native';

export default function Home() {
  return (
    <ImageBackground
      source={require('../assets/images/splash_bg_opq.png')}
      style={styles.background}>
      <View style={styles.container}>
        <Image
          source={require('../assets/images/logo_png.png')}
          style={styles.image}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
});
