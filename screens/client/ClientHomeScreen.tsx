import React from 'react';
import { View, Text } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

export default function ClientHomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 16 }}>
      <Card style={{ width: '100%', maxWidth: 400 }}>
        <Card.Content>
          <Title>Bienvenue sur l'Accueil</Title>
          <Paragraph>Découvrez nos boutiques et produits !</Paragraph>
        </Card.Content>
      </Card>
    </View>
  );
}
