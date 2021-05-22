import React from 'react';
import { render, cleanup } from '../test-utils';
import Dashboard from '../components/Dashboard';
import '@testing-library/jest-dom';

beforeEach(cleanup);

describe("<Dashboard />", () => {
  it('renders no cards when no weather is provided', () => {
    const { queryByTestId } = render(<Dashboard />, { initialState: { weather: [] } });
    expect(queryByTestId('dashboard-container')).toBeEmptyDOMElement();
  });
  it('renders a corresponding card when city is provided', () => {
    const { queryByText } = render(<Dashboard />, { initialState: { weather: [
      {
        city: 'Kiev',
      }
    ] } });
    expect(queryByText('Kiev')).toBeDefined();
  });
  it('renders an exact number of cards when some amount of cities are provided', () => {
    const { queryByTestId } = render(<Dashboard />, { initialState: { weather: [
      { city: 'Kiev'}, { city: 'Kiev'}, { city: 'Kiev'}
    ] } });
    expect(queryByTestId('dashboard-container').children.length).toBe(3);
  });
  
});