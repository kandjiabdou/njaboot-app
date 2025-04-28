import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import ClientHomeScreen from '../screens/client/ClientHomeScreen';
import BoutiqueListScreen from '../screens/client/BoutiqueListScreen';
import BoutiqueMapScreen from '../screens/client/BoutiqueMapScreen';
import VisitorProfileScreen from '../screens/visitor/VisitorProfileScreen';

const Tab = createBottomTabNavigator();

export default function VisitorTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName = 'home';

          if (route.name === 'BoutiqueListVisitor') iconName = 'store';
          else if (route.name === 'BoutiqueMapVisitor') iconName = 'map-marker';
          else if (route.name === 'VisitorProfile') iconName = 'account';

          return <MaterialCommunityIcons name={iconName} color={color} size={size} />;
        },
        headerShown: false,
        tabBarActiveTintColor: '#1ca05e',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="HomeVisitor" component={ClientHomeScreen} options={{ title: 'Accueil' }} />
      <Tab.Screen name="BoutiqueListVisitor" component={BoutiqueListScreen} options={{ title: 'Boutiques' }} />
      <Tab.Screen name="BoutiqueMapVisitor" component={BoutiqueMapScreen} options={{ title: 'Carte' }} />
      <Tab.Screen name="VisitorProfile" component={VisitorProfileScreen} options={{ title: 'Profil' }} />
    </Tab.Navigator>
  );
}
