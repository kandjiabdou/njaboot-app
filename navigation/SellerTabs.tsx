import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import SellerHomeScreen from '../screens/seller/SellerHomeScreen';
import SellerProfileScreen from '../screens/seller/SellerProfileScreen';
import ManageStockScreen from '../screens/seller/ManageStockScreen';
import SellerOrdersScreen from '../screens/seller/SellerOrdersScreen';
import EditBoutiqueInfoScreen from '../screens/seller/EditBoutiqueInfoScreen';
import SellerStatsScreen from '../screens/seller/SellerStatsScreen';

const Tab = createBottomTabNavigator();

export default function SellerTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName = 'home';

          if (route.name === 'ProfileSeller') iconName = 'account';
          else if (route.name === 'ManageStock') iconName = 'cube-outline';
          else if (route.name === 'OrdersSeller') iconName = 'cart-outline';
          else if (route.name === 'EditBoutiqueInfo') iconName = 'store-edit-outline';
          else if (route.name === 'SellerStats') iconName = 'chart-line';

          return <MaterialCommunityIcons name={iconName} color={color} size={size} />;
        },
        headerShown: false,
        tabBarActiveTintColor: '#1ca05e',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="HomeSeller" component={SellerHomeScreen} options={{ title: 'Accueil' }} />
      <Tab.Screen name="ManageStock" component={ManageStockScreen} options={{ title: 'Stock' }} />
      <Tab.Screen name="OrdersSeller" component={SellerOrdersScreen} options={{ title: 'Commandes' }} />
      <Tab.Screen name="EditBoutiqueInfo" component={EditBoutiqueInfoScreen} options={{ title: 'Infos Boutique' }} />
      <Tab.Screen name="SellerStats" component={SellerStatsScreen} options={{ title: 'Statistiques' }} />
      <Tab.Screen name="ProfileSeller" component={SellerProfileScreen} options={{ title: 'Profil' }} />
    </Tab.Navigator>
  );
}
