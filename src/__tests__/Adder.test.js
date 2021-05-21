import React from 'react';
import '@testing-library/jest-dom';
import { render, cleanup } from '@testing-library/react'
import { Adder } from '../components/Adder';

beforeEach(cleanup);

describe("<Adder />", () => {
  it("disables button when isAdding prop is true", () => {
    const { queryByTestId } = render(<Adder isAdding={true} error="" />);
    expect(queryByTestId('add-button')).toBeDisabled();
  });
  it("shows error text under the TextField when error is provided", () => {
    const { getByText } = render(<Adder error="error example" />);
    expect(getByText(/error example/)).toBeDefined();
  });
});