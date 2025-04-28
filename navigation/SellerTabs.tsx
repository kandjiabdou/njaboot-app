import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SellerHomeScreen from '../screens/seller/SellerHomeScreen';
import SellerProfileScreen from '../screens/seller/SellerProfileScreen';
import ManageStockScreen from '../screens/seller/ManageStockScreen';
import SellerOrdersScreen from '../screens/seller/SellerOrdersScreen';
import EditBoutiqueInfoScreen from '../screens/seller/EditBoutiqueInfoScreen';
import SellerStatsScreen from '../screens/seller/SellerStatsScreen';

const Tab = createBottomTabNavigator();

export default function SellerTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="HomeSeller" component={SellerHomeScreen} options={{ title: 'Accueil' }} />
      <Tab.Screen name="ProfileSeller" component={SellerProfileScreen} options={{ title: 'Profil' }} />
      <Tab.Screen name="ManageStock" component={ManageStockScreen} options={{ title: 'Stock' }} />
      <Tab.Screen name="OrdersSeller" component={SellerOrdersScreen} options={{ title: 'Commandes' }} />
      <Tab.Screen name="EditBoutiqueInfo" component={EditBoutiqueInfoScreen} options={{ title: 'Infos Boutique' }} />
      <Tab.Screen name="SellerStats" component={SellerStatsScreen} options={{ title: 'Statistiques' }} />
    </Tab.Navigator>
  );
}
