import Counter from "../components/Counter";
import {render, screen, waitFor} from '@testing-library/react'
import userEvent from '@testing-library/user-event'

beforeEach(() => {
  render(<Counter />);
})

test('renders counter message', () => {
  const counterMessage = screen.getByText('Counter');
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  const counterVal = screen.getByTestId('count');
  expect(counterVal).toHaveTextContent('0');
});

test('clicking + increments the count', async () => {
  const initialVal = screen.getByTestId('count');
  expect(initialVal).toHaveTextContent('0');

  await userEvent.click(screen.getByRole('button', {name: '+'}));

  await waitFor(() => {
    const updatedVal = screen.getByTestId('count');
    expect(updatedVal).toHaveTextContent('1');
  });
});

test('clicking - decrements the count', async () => {
  const initialVal = screen.getByTestId('count');
  expect(initialVal).toHaveTextContent('0');

  await userEvent.click(screen.getByRole('button', {name: '-'}));

  await waitFor(() => {
    const updatedVal = screen.getByTestId('count');
    expect(updatedVal).toHaveTextContent('-1');
  });
});
