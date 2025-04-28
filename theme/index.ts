import { MD3LightTheme as DefaultTheme, MD3DarkTheme as DarkTheme } from 'react-native-paper';

export const Colors = {
  primary: '#1ca05e', // Vert Njaboot Connect
  secondary: '#fbb03b', // Jaune Njaboot Connect
  black: '#0d0300',
  white: '#fdfef8',
  gray: '#e5e5e5',
};

// Thème pour le CLIENT
export const ClientTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: Colors.primary,
    background: Colors.secondary, // Jaune fond
    surface: Colors.white,
    text: Colors.black,
    onPrimary: Colors.white,
    onSurface: Colors.black,
  },
};

// Thème pour le BOUTIQUIER
export const SellerTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: Colors.primary,
    background: Colors.black, // Noir fond
    surface: Colors.gray,
    text: Colors.white,
    onPrimary: Colors.white,
    onSurface: Colors.white,
  },
};

// Thème pour le VISITEUR
export const VisitorTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: Colors.primary,
    background: Colors.white,
    surface: Colors.gray,
    text: Colors.black,
    onPrimary: Colors.white,
    onSurface: Colors.black,
  },
};
