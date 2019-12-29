import React from 'react';
import { render, cleanup, fireEvent, getByPlaceholderText } from '@testing-library/react';
//import App from './App';
import ToDoApp from './ToDo';
import { Simulate } from 'react-dom/test-utils';

afterEach(cleanup);

test('clean application launch', async () => {
  const { getByText } = render(<ToDoApp />);
  const linkElement = getByText(/ToDo List is empty./i);
  expect(linkElement).toBeInTheDocument();
});

test('first submit should be #1', async () => {
  const {getByText} = render(<ToDoApp />);
  expect(getByText('Submit #1'));
});

test('submitting empty form make no changes', () => {
  const {getByText} = render(<ToDoApp />);
  const submitButton = getByText('Submit #1');
  Simulate.submit(submitButton);
  expect(getByText('Submit #1'));
});

test('submitting form add new record', () => {
  //const onSubmit = jest.fn();
  const {getByPlaceholderText, getByText} = render(<ToDoApp />);

  const inputValue = "To test an application.";
  const submitButton = getByText('Submit #1');
  fireEvent.change(getByPlaceholderText(/ToDo task/i), {target: {value:inputValue}});
  Simulate.submit(submitButton);

  expect(getByText('Submit #2'));
})