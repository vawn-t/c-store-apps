import '@testing-library/jest-native/extend-expect';
import { NativeModules } from 'react-native';

// Mock Expo modules that might cause issues in tests
jest.mock('expo-font');
jest.mock('expo-asset');
jest.mock('expo-constants', () => ({
  Constants: { manifest: { extra: { logRocketAppId: 'mock-id' } } },
}));

// Mock AsyncStorage
jest.mock('@react-native-async-storage/async-storage', () => ({
  setItem: jest.fn(() => Promise.resolve()),
  getItem: jest.fn(() => Promise.resolve(null)),
  removeItem: jest.fn(() => Promise.resolve()),
  clear: jest.fn(() => Promise.resolve()),
}));

// Mock expo-router
jest.mock('expo-router', () => ({
  useRouter: () => ({
    navigate: jest.fn(),
    replace: jest.fn(),
  }),
  usePathname: () => '/mock-path',
  Link: 'Link',
  Stack: 'Stack',
  Tabs: 'Tabs',
}));

// Mock LogRocket
jest.mock('@logrocket/react-native', () => ({
  init: jest.fn(),
  identify: jest.fn(),
  track: jest.fn(),
}));

// RN-specific mocks
NativeModules.StatusBarManager = {
  HEIGHT: 42,
  setStyle: jest.fn(),
};
