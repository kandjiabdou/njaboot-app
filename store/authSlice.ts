import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface User {
  id: number;
  name: string;
  email: string;
}

interface AuthState {
  isAuthenticated: boolean;
  role: 'CLIENT' | 'MANAGER' | null;
  token: string | null;
  user: User | null;
  _persist?: {
    version: number;
    rehydrated: boolean;
  };
}

const initialState: AuthState = {
  isAuthenticated: false,
  role: null,
  token: null,
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{ 
      role: 'CLIENT' | 'MANAGER';
      token: string;
      user: User;
    }>) => {
      state.isAuthenticated = true;
      state.role = action.payload.role;
      state.token = action.payload.token;
      state.user = action.payload.user;
    },
    logout: (state) => {
      return initialState; // Réinitialise complètement l'état
    },
  },
});

export const { login, logout } = authSlice.actions; // <-- important de bien exporter comme ça
export default authSlice.reducer;
