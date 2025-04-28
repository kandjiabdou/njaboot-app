import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import ClientHomeScreen from '../screens/client/ClientHomeScreen';
import ClientProfileScreen from '../screens/client/ClientProfileScreen';
import BoutiqueListScreen from '../screens/client/BoutiqueListScreen';
import BoutiqueMapScreen from '../screens/client/BoutiqueMapScreen';
import ClientOrdersScreen from '../screens/client/ClientOrdersScreen';
import ClientEditProfileScreen from '../screens/client/ClientEditProfileScreen';

const Tab = createBottomTabNavigator();

export default function ClientTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName = 'home';

          if (route.name === 'BoutiqueList') iconName = 'store';
          else if (route.name === 'BoutiqueMap') iconName = 'map-marker';
          else if (route.name === 'ClientOrders') iconName = 'cart';
          else if (route.name === 'ProfileClient') iconName = 'account';

          return <MaterialCommunityIcons name={iconName} color={color} size={size} />;
        },
        headerShown: false,
        tabBarActiveTintColor: '#0d0300', // noir texte
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="HomeClient" component={ClientHomeScreen} options={{ title: 'Accueil' }} />
      <Tab.Screen name="BoutiqueList" component={BoutiqueListScreen} options={{ title: 'Boutiques' }} />
      <Tab.Screen name="BoutiqueMap" component={BoutiqueMapScreen} options={{ title: 'Carte' }} />
      <Tab.Screen name="ClientOrders" component={ClientOrdersScreen} options={{ title: 'Commandes' }} />
      <Tab.Screen name="ProfileClient" component={ClientProfileScreen} options={{ title: 'Profil' }} />
    </Tab.Navigator>
  );
}
