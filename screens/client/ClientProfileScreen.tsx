import React from 'react';
import { View, Text, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/authSlice';

export default function ClientProfileScreen() {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', gap: 20 }}>
      <Text>Profil Client</Text>
      <Button title="Se déconnecter" onPress={handleLogout} />
    </View>
  );
}
