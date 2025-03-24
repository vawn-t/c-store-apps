import React from 'react';
import { render } from '@testing-library/react-native';
import Header from '../index';

const navigation = { navigate: jest.fn(), goBack: jest.fn() };
const options = {
  title: 'Header Title',
  headerStyle: {
    backgroundColor: 'red',
  },
  headerTitleStyle: {
    color: 'white',
  },
};

describe('Header Component', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(
      <Header navigation={navigation} options={options} />
    );
    // Your assertions here based on the actual component
    expect(getByTestId('back-icon')).toBeTruthy();
  });
});
