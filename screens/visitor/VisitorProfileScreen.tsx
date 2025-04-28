import React from 'react';
import { View } from 'react-native';
import { Button, Title, Paragraph, Card } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../@types/navigation';

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
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 16 }}>
      <Card style={{ width: '100%', maxWidth: 400 }}>
        <Card.Content style={{ alignItems: 'center', gap: 20 }}>
          <Title>Bienvenue sur Njaboot Connect</Title>
          <Paragraph>Connectez-vous pour découvrir plus !</Paragraph>
          <Button mode="contained" onPress={handleGoToLogin}>
            Se connecter
          </Button>
        </Card.Content>
      </Card>
    </View>
  );
}
