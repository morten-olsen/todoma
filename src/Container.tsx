import 'react-native-get-random-values';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';
import React from 'react';
import { View } from 'react-native';
import Router from 'Router';
import { light } from 'theme';

const App: React.FC<{}> = () => (
  <SafeAreaProvider>
    <ThemeProvider theme={light}>
      <View style={{ flex: 1 }}>
        <Router />
        <StatusBar style="auto" />
      </View>
    </ThemeProvider>
  </SafeAreaProvider>
);

export default App;
