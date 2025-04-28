import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  isAuthenticated: boolean;
  role: 'client' | 'boutiquier' | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  role: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginAsClient: (state) => {
      state.isAuthenticated = true;
      state.role = 'client';
    },
    loginAsSeller: (state) => {
      state.isAuthenticated = true;
      state.role = 'boutiquier';
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.role = null;
    },
  },
});

export const { loginAsClient, loginAsSeller, logout } = authSlice.actions;
export default authSlice.reducer;
