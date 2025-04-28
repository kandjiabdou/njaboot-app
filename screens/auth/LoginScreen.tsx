import React from 'react';
import { View, Text, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { loginAsClient, loginAsSeller } from '../../store/authSlice';

export default function LoginScreen() {
  const dispatch = useDispatch();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', gap: 20 }}>
      <Text>Login Screen</Text>
      <Button title="Se connecter comme Client" onPress={() => dispatch(loginAsClient())} />
      <Button title="Se connecter comme Boutiquier" onPress={() => dispatch(loginAsSeller())} />
    </View>
  );
}
