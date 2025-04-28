import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Title, Paragraph, Card, List } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../store/authSlice';
import { RootState } from '../../store';

export default function ClientProfileScreen() {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.auth.user);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Title style={styles.title}>Profil Client</Title>
          
          <List.Section>
            <List.Item
              title="Nom"
              description={user?.name || 'Non défini'}
              left={props => <List.Icon {...props} icon="account" />}
            />
            <List.Item
              title="Email"
              description={user?.email || 'Non défini'}
              left={props => <List.Icon {...props} icon="email" />}
            />
            <List.Item
              title="ID"
              description={user?.id?.toString() || 'Non défini'}
              left={props => <List.Icon {...props} icon="identifier" />}
            />
          </List.Section>

          <Button 
            mode="contained" 
            onPress={handleLogout}
            style={styles.logoutButton}
          >
            Se déconnecter
          </Button>
        </Card.Content>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  card: {
    width: '100%',
    maxWidth: 400,
    alignSelf: 'center',
  },
  title: {
    textAlign: 'center',
    marginBottom: 20,
  },
  logoutButton: {
    marginTop: 20,
  },
});
