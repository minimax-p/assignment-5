import '@testing-library/jest-dom';
import {cleanup, render} from '@testing-library/react';
import { App } from './App';
import react from 'react';
// Note: running cleanup afterEach is done automatically foryou in @testing-library/react@9.0.0 or higher
// unmount and cleanup DOM after the test is finished.
afterEach(cleanup);
it('App contains text "hello world"', () => {
    const { queryByText } = render(<App />);
    expect(queryByText(/hello world/i)).toBeTruthy();
});


//****************************TESTING THE IMAGES*************************/
import logo from '../src/images/icon.png'
import moonFestivalImage from '../src/images/moon-festival.webp';
// Use jest mock function to avoid having random URL on each test run
jest.mock('../src/images/moon-festival.webp', () => ({
  __esModule: true, 
  default: 'moon-festival.webp', 
}));
jest.mock('../src/images/icon.png', () => ({
    __esModule: true, 
    default: 'icon.png', 
}));
// Test to see if the images URL are corect
test('App renders the correct moon festival image', () => {
  const { container } = render(<App />);
  const image = container.querySelector('#moonFest');
  expect(image).toHaveAttribute('src', moonFestivalImage);
});
test('App renders the correct logo image', () => {
    const { container } = render(<App />);
    const image = container.querySelector('#logo');
    expect(image).toHaveAttribute('src', logo);
});

//*************************TESTING THE DESCRIPTION**********************//
// Test to see if the description element is in the app
test('App contains the description element', () => {
    const { container } = render(<App />);
    const description = container.querySelector('#description');
    expect(description).toBeInTheDocument();
});
test('Description has the correct styling', () => {
    const { container } = render(<App />);
    const description = container.querySelector('#description');
    expect(description).toHaveAttribute('class', "max-w-[500px] text-center text-black-200");
});