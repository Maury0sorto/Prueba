import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import InicioStackScreen from './Stacks/InicioStackScreen';


const App = () => {



  return (
    <NavigationContainer>
      <InicioStackScreen />
    </NavigationContainer>
  );
};

export default App;

