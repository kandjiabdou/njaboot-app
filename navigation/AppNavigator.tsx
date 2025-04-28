import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import AuthStack from './AuthStack';
import ClientTabs from './ClientTabs';
import SellerTabs from './SellerTabs';
import VisitorTabs from './VisitorTabs';
import { PaperProvider } from 'react-native-paper';
import { ClientTheme, SellerTheme, VisitorTheme } from '../theme';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  const { isAuthenticated, role } = useSelector((state: RootState) => state.auth);

  // Sélection du thème actuel selon l'état utilisateur
  const getCurrentTheme = () => {
    if (!isAuthenticated) return VisitorTheme;
    if (role === 'CLIENT') return ClientTheme;
    if (role === 'MANAGER') return SellerTheme;
    return VisitorTheme; // fallback si role nul
  };

  // Sélection du stack selon authentication
  const renderScreens = () => {
    if (!isAuthenticated) {
      return (
        <Stack.Group>
          <Stack.Screen name="Visitor" component={VisitorTabs} />
          <Stack.Screen name="Auth" component={AuthStack} />
        </Stack.Group>
      );
    }
    if (role === 'CLIENT') {
      return (
        <Stack.Group>
          <Stack.Screen name="Client" component={ClientTabs} />
        </Stack.Group>
      );
    }
    if (role === 'MANAGER') {
      return (
        <Stack.Group>
          <Stack.Screen name="Seller" component={SellerTabs} />
        </Stack.Group>
      );
    }
    return null; // fallback sécurité
  };

  return (
    <SafeAreaProvider>
      <PaperProvider theme={getCurrentTheme()}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            {renderScreens()}
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </SafeAreaProvider>
  );
}