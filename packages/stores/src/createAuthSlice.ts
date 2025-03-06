import { extractUserIdFromToken } from '@repo/utils';
import { StateCreator } from 'zustand';

type State = {
  phone: null | string;
  userId: null | number;
};

type Action = {
  setPhone: (phone: string) => void;
  setUserId: (token: string) => void;
};

export type AuthState = State & Action;

const DEFAULT_STATE: State = {
  phone: null,
  userId: null,
};

const createAuthSlice: StateCreator<AuthState, [], [], AuthState> = (set) => ({
  ...DEFAULT_STATE,
  setPhone: (phone: string) => set(() => ({ phone })),
  setUserId: (token: string) => {
    set(() => ({ userId: extractUserIdFromToken(token) }));
  },
});

export default createAuthSlice;
