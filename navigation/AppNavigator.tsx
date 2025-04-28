import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import AuthStack from './AuthStack';
import ClientTabs from './ClientTabs';
import SellerTabs from './SellerTabs';
import VisitorTabs from './VisitorTabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  const { isAuthenticated, role } = useSelector((state: RootState) => state.auth);

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {!isAuthenticated ? (
            <>
              <Stack.Screen name="Visitor" component={VisitorTabs} />
              <Stack.Screen name="Auth" component={AuthStack} />
            </>
          ) : role === 'client' ? (
            <Stack.Screen name="Client" component={ClientTabs} />
          ) : (
            <Stack.Screen name="Seller" component={SellerTabs} />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
