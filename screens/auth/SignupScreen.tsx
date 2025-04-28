import React from 'react';
import { View, Text, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { loginAsClient } from '../../store/authSlice';

export default function SignupScreen() {
  const dispatch = useDispatch();

  const handleSignup = () => {
    dispatch(loginAsClient()); // Signup = création de compte Client
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', gap: 20 }}>
      <Text>Signup Screen</Text>
      <Button title="S'inscrire et se connecter comme Client" onPress={handleSignup} />
    </View>
  );
}
