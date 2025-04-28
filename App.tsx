import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import { PaperProvider } from 'react-native-paper';
import AppNavigator from './navigation/AppNavigator';

export default function App() {
  return (
    <Provider store={store}>
      <PaperProvider>
        <AppNavigator />
      </PaperProvider>
    </Provider>
  );
}
