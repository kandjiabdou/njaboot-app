import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Button, TextInput, Title, Card, Paragraph } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { login } from '../../store/authSlice';
import { useNavigation } from '@react-navigation/native';

export default function SignupScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigation = useNavigation<any>();

  const handleSignup = () => {
    // Fake signup API simulation
    setTimeout(() => {
      if (username && password) {
        dispatch(login({ role: 'client' })); // On suppose qu'un nouvel inscrit est client par défaut
      } else {
        alert('Veuillez remplir tous les champs');
      }
    }, 1000);
  };

  const goToLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 16 }}>
      <Card style={{ width: '100%', maxWidth: 400 }}>
        <Card.Content style={{ gap: 20 }}>
          <Title>Inscription</Title>
          <TextInput
            label="Nom d'utilisateur"
            value={username}
            onChangeText={setUsername}
          />
          <TextInput
            label="Mot de passe"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          <Button mode="contained" onPress={handleSignup}>
            S'inscrire
          </Button>
          <TouchableOpacity onPress={goToLogin}>
            <Paragraph style={{ textAlign: 'center', marginTop: 10 }}>
              Déjà un compte ? Se connecter
            </Paragraph>
          </TouchableOpacity>
        </Card.Content>
      </Card>
    </View>
  );
}
