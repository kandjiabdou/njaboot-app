import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../@types/navigation'; // 👈 Fais attention au chemin

type VisitorScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Visitor'>;

export default function VisitorProfileScreen() {
  const navigation = useNavigation<VisitorScreenNavigationProp>();

  const handleGoToLogin = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Auth' }],
    });
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', gap: 20 }}>
      <Text>Bienvenue ! Connectez-vous pour accéder à votre profil</Text>
      <Button title="Se connecter" onPress={handleGoToLogin} />
    </View>
  );
}