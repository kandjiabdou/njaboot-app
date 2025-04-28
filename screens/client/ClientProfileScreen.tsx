import React from 'react';
import { View } from 'react-native';
import { Button, Title, Paragraph, Card } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/authSlice';

export default function ClientProfileScreen() {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 16 }}>
      <Card style={{ width: '100%', maxWidth: 400 }}>
        <Card.Content style={{ alignItems: 'center', gap: 20 }}>
          <Title>Profil Client</Title>
          <Paragraph>Bienvenue sur votre profil !</Paragraph>
          <Button mode="contained" onPress={handleLogout}>
            Se déconnecter
          </Button>
        </Card.Content>
      </Card>
    </View>
  );
}
