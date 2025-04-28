import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ClientHomeScreen from '../screens/client/ClientHomeScreen';
import BoutiqueListScreen from '../screens/client/BoutiqueListScreen';
import BoutiqueMapScreen from '../screens/client/BoutiqueMapScreen';
import VisitorProfileScreen from '../screens/visitor/VisitorProfileScreen';

const Tab = createBottomTabNavigator();

export default function VisitorTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="HomeVisitor" component={ClientHomeScreen} options={{ title: 'Accueil' }} />
      <Tab.Screen name="BoutiqueListVisitor" component={BoutiqueListScreen} options={{ title: 'Boutiques' }} />
      <Tab.Screen name="BoutiqueMapVisitor" component={BoutiqueMapScreen} options={{ title: 'Carte' }} />
      <Tab.Screen name="VisitorProfile" component={VisitorProfileScreen} options={{ title: 'Profil' }} />
    </Tab.Navigator>
  );
}
