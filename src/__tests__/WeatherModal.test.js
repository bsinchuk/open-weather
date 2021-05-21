import React from 'react';
import '@testing-library/jest-dom';
import { render, cleanup } from '@testing-library/react'
import WeatherModal from '../components/WeatherModal';

beforeEach(cleanup);

describe("WeatherModal", () => {
  it("should render data when city is provided", () => {
    const { queryByTestId } = render(<WeatherModal city="Kiev" hourly={[]} main="" />);
    expect(queryByTestId('modal-city').textContent).toBe("Kiev");
  });
  it("should render a spinner when there is no city", () => {
    const { queryByTestId } = render(<WeatherModal />);
    expect(queryByTestId('modal-spinner')).toBeDefined();
  });
  it("should render empty <p> when there is no fetching city but modal is shown somehow", () => {
    const { queryByTestId } = render(<WeatherModal />);
    expect(queryByTestId('modal-empty')).toBeEmptyDOMElement();
  })
});