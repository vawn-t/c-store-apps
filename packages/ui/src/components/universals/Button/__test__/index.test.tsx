import { render, fireEvent } from '@testing-library/react-native';
import Button from '../index';
import { AddIcon } from '@components/Icons';

describe('Button Component', () => {
  // Test rendering
  it('renders children correctly', () => {
    const { getByText } = render(<Button>Test Button</Button>);
    expect(getByText('Test Button')).toBeTruthy();
  });

  // Test onPress handler
  it('calls onPress when pressed', () => {
    const onPressMock = jest.fn();
    const { getByText } = render(
      <Button onPress={onPressMock}>Clickable</Button>
    );

    fireEvent.press(getByText('Clickable'));
    expect(onPressMock).toHaveBeenCalledTimes(1);
  });

  // Test disabled state
  it('does not call onPress when disabled', () => {
    const onPressMock = jest.fn();
    const { getByText } = render(
      <Button onPress={onPressMock} disabled>
        Disabled Button
      </Button>
    );

    fireEvent.press(getByText('Disabled Button'));
    expect(onPressMock).not.toHaveBeenCalled();
  });

  // Test with icon prop if applicable
  it('renders with an icon', () => {
    const testIcon = <AddIcon testID="test-icon" />;
    const { getByTestId } = render(
      <Button icon={testIcon}>Icon Button</Button>
    );

    expect(getByTestId('test-icon')).toBeTruthy();
  });
});
