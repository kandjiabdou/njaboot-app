import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ClientHomeScreen from '../screens/client/ClientHomeScreen';
import ClientProfileScreen from '../screens/client/ClientProfileScreen';
import BoutiqueListScreen from '../screens/client/BoutiqueListScreen';
import BoutiqueMapScreen from '../screens/client/BoutiqueMapScreen';
import ClientOrdersScreen from '../screens/client/ClientOrdersScreen';
import ClientEditProfileScreen from '../screens/client/ClientEditProfileScreen';

const Tab = createBottomTabNavigator();

export default function ClientTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="HomeClient" component={ClientHomeScreen} options={{ title: 'Accueil' }} />
      <Tab.Screen name="ProfileClient" component={ClientProfileScreen} options={{ title: 'Profil' }} />
      <Tab.Screen name="BoutiqueList" component={BoutiqueListScreen} options={{ title: 'Boutiques' }} />
      <Tab.Screen name="BoutiqueMap" component={BoutiqueMapScreen} options={{ title: 'Carte' }} />
      <Tab.Screen name="ClientOrders" component={ClientOrdersScreen} options={{ title: 'Commandes' }} />
      <Tab.Screen name="ClientEditProfile" component={ClientEditProfileScreen} options={{ title: 'Modifier Profil' }} />
    </Tab.Navigator>
  );
}
