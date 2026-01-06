import { render, screen, act } from '@testing-library/react';
import { Toast } from '../toast';
import '@testing-library/jest-dom';

describe('Toast', () => {
  it('renders message', () => {
    render(
      <Toast id="1" message="Test Message" type="success" onClose={jest.fn()} />
    );

    expect(screen.getByText('Test Message')).toBeInTheDocument();
  });

  it('calls onClose after duration', () => {
    jest.useFakeTimers();
    const onClose = jest.fn();

    render(
      <Toast id="1" message="Test Message" type="success" onClose={onClose} duration={1000} />
    );

    act(() => {
        jest.advanceTimersByTime(1000);
    });

    expect(onClose).toHaveBeenCalledWith('1');
    jest.useRealTimers();
  });
});
