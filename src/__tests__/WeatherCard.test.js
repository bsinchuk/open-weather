import React from 'react';
import '@testing-library/jest-dom';
import { render, cleanup } from '@testing-library/react'
import WeatherCard from '../components/WeatherCard';

beforeEach(cleanup);

describe("WeatherCard", () => {
  it("should render data when city is provided", () => {
    const { queryByTestId } = render(<WeatherCard
      temp={14.73}
      onUpdate={() => null}
      onDelete={() => null}
      onExpand={() => null} />);
    expect(queryByTestId('card-temp').textContent).toBe("15°");
  });
  it("should render a spinner when there is no city", () => {
    const { queryByTestId } = render(<WeatherCard 
      updating={true}
      onUpdate={() => null}
      onDelete={() => null}
      onExpand={() => null} />);
    expect(queryByTestId('card-spinner')).toBeDefined();
  });
});